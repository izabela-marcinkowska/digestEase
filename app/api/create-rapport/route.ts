import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { format, startOfMonth, endOfMonth } from "date-fns";
const openai = new OpenAI();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getRecordsForCurrentMonth() {
  // Get the first and last day of the current month
  const firstDayOfMonth = format(startOfMonth(new Date()), "yyyy-MM-dd");
  const lastDayOfMonth = format(endOfMonth(new Date()), "yyyy-MM-dd");

  try {
    let { data, error } = await supabase
      .from("Logs")
      .select("*")
      .gte("date", firstDayOfMonth)
      .lte("date", lastDayOfMonth);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const dataFromThisMonth = await getRecordsForCurrentMonth();
    console.log(dataFromThisMonth);
    const currentDate = format(new Date(), "yyyy-MM-dd");
    const dataForChat = JSON.stringify(dataFromThisMonth);

    let answer = "";
    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Analyze IBS patient data to identify connections between dietary patterns, stress levels, alcohol consumption, and the severity and frequency of bowel movements and pain. Emphasize how alcohol, stress, and certain foods might influence IBS symptoms. Address the analysis directly to 'you,' providing a summarized view of your dietary habits over the past month and their correlation with your symptoms. Deliver your findings in a succinct manner, with no more than five to seven sentences, focusing on five primary insights or trends derived from the data. Refrain from suggesting general lifestyle changes or dietary advice, and avoid discussing the variability of IBS symptoms among individuals or the necessity for medical consultation. The objective is to present a targeted analysis of how your diet and stress levels are related to your IBS symptoms, based on the data provided, while maintaining a direct and personalized approach. Do not make a numbered list. ${dataForChat}`,
        },
      ],
      stream: true,
    });
    for await (const chunk of stream) {
      answer += chunk.choices[0]?.delta?.content || "";
    }
    console.log("type", typeof answer);

    const { error } = await supabase.from("Rapports").insert([
      {
        date: currentDate,
        result: answer,
      },
    ]);
    if (!error) {
      return NextResponse.json({ answer });
    }
    return NextResponse.json(error);
  } catch (error) {
    console.error("Error fetching data:", error);
    NextResponse.json({ message: error }, { status: 500 });
  }
}
