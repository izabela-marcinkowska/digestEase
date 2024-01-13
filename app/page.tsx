import Image from "next/image";
import whatitis from "../assets/whatitis.png";
import howitworks from "../assets/howitworks.png";

export default function Home() {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={whatitis} alt="Album" className="w-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">What is It?</h2>
          <p>
            Our platform is an innovative solution for individuals with
            Irritable Bowel Syndrome (IBS). It acts as a digital diary and
            analysis tool, helping users track and manage their IBS symptoms
            with ease. Using advanced AI, we simplify the tracking of food
            intake, bowel movements, and health indicators, making IBS
            management more accessible.
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={howitworks} alt="Album" className="w-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">How it works?</h2>
          <p>
            * Daily Tracking: Users log their food, bowel types, alcohol,
            medication, pain, stress levels, and feelings daily.{" "}
          </p>
          <p>
            * Data Analysis: With a click, the AI analyzes these inputs,
            correlating diet and stress with IBS symptoms.
          </p>{" "}
          <p>
            * Personalized Insights: Users receive customized feedback,
            identifying potential dietary triggers and offering IBS-friendly
            recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
