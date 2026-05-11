import { useState } from "react";

export default function Career() {

  const [career, setCareer] =
    useState("");

  const roadmaps = {

    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Projects",
      "GitHub",
      "DSA Basics"
    ],

    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "APIs",
      "Authentication",
      "Deployment"
    ],

    data: [
      "Python",
      "SQL",
      "Pandas",
      "Power BI",
      "Machine Learning"
    ]

  };

  return (

    <div>

      <h1>CareerMaxxing 🚀</h1>

      <select
        onChange={(e) =>
          setCareer(e.target.value)
        }
      >

        <option>
          Select Career
        </option>

        <option value="frontend">
          Frontend Developer
        </option>

        <option value="backend">
          Backend Developer
        </option>

        <option value="data">
          Data Analyst
        </option>

      </select>

      {

        career && (

          <div>

            <h2>Roadmap</h2>

            {

              roadmaps[career].map(
                (step, index) => (

                <p key={index}>
                  ✅ {step}
                </p>
              ))
            }

          </div>
        )
      }

    </div>
  );
}