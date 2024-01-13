import Image from "next/image";
import whatitis from "../assets/whatitis.png";
import howitworks from "../assets/howitworks.png";
import ActionCard from "@/components/ActionCard";

export default function Home() {
  return (
    <div className=" flex flex-col gap-2 mx-2 my-4">
      <ActionCard
        img={whatitis}
        title="What is it?"
        description="Our platform is an innovative solution for individuals with
            Irritable Bowel Syndrome (IBS). It acts as a digital diary and
            analysis tool, helping users track and manage their IBS symptoms
            with ease. Using advanced AI, we simplify the tracking of food
            intake, bowel movements, and health indicators, making IBS
            management more accessible."
      />
      <ActionCard
        img={howitworks}
        title="How it works?"
        description="You log your food, bowel types, alcohol, medication, pain, stress levels, and feelings daily. With a click, the AI analyzes your inputs, correlating your diet and stress with IBS symptoms. You receive personalized insights, identifying potential dietary triggers and offering IBS-friendly recommendations."
      />
    </div>
  );
}
