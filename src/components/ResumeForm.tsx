"use client";

import { Resume } from "@/types/resume";
import { PlusCircle } from "lucide-react";

interface Props {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export default function ResumeForm({ resume, setResume }: Props) {
  const handleChange = (path: string, value: string) => {
    const keys = path.split(".");
    setResume((prev) => {
      const updated: any = JSON.parse(JSON.stringify(prev));
      let current = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (current[key] === undefined) {
          current[key] = isNaN(Number(keys[i + 1])) ? {} : [];
        }
        current = current[key];
      }
      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const addSection = (section: keyof Resume, template: any) => {
    setResume((prev) => ({
      ...prev,
      [section]: [...(prev[section] as any[]), template],
    }));
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md space-y-10">
      {/* BASICS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border rounded-lg p-4">
          <input
            placeholder="Full Name"
            value={resume.basics.name}
            onChange={(e) => handleChange("basics.name", e.target.value)}
            className="border p-2 rounded bg-gray-50"
          />
          <input
            placeholder="Job Title"
            value={resume.basics.label}
            onChange={(e) => handleChange("basics.label", e.target.value)}
            className="border p-2 rounded bg-gray-50"
          />
          <input
            placeholder="Email"
            value={resume.basics.email}
            onChange={(e) => handleChange("basics.email", e.target.value)}
            className="border p-2 rounded bg-gray-50"
          />
          <input
            placeholder="Phone"
            value={resume.basics.phone}
            onChange={(e) => handleChange("basics.phone", e.target.value)}
            className="border p-2 rounded bg-gray-50"
          />
          <input
            placeholder="City"
            value={resume.basics.location.city}
            onChange={(e) => handleChange("basics.location.city", e.target.value)}
            className="border p-2 rounded bg-gray-50"
          />
          <input
            placeholder="Region"
            value={resume.basics.location.region}
            onChange={(e) =>
              handleChange("basics.location.region", e.target.value)
            }
            className="border p-2 rounded bg-gray-50"
          />
          <input
            placeholder="Country"
            value={resume.basics.location.countryCode}
            onChange={(e) =>
              handleChange("basics.location.countryCode", e.target.value)
            }
            className="border p-2 rounded bg-gray-50"
          />
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        {resume.work.map((job, i) => (
          <div key={i} className="border rounded-lg p-4 mb-4 bg-gray-50">
            <input
              placeholder="Company"
              value={job.name || ""}
              onChange={(e) => handleChange(`work.${i}.name`, e.target.value)}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              placeholder="Position"
              value={job.position || ""}
              onChange={(e) =>
                handleChange(`work.${i}.position`, e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              placeholder="Start Date"
              value={job.startDate || ""}
              onChange={(e) =>
                handleChange(`work.${i}.startDate`, e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Summary"
              value={job.summary || ""}
              onChange={(e) =>
                handleChange(`work.${i}.summary`, e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addSection("work", {
              name: "",
              position: "",
              url: "",
              startDate: "",
              summary: "",
              highlights: ["", "", ""],
            })
          }
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <PlusCircle className="w-5 h-5" /> Add Work Experience
        </button>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {resume.education.map((edu, i) => (
          <div key={i} className="border rounded-lg p-4 mb-4 bg-gray-50">
            <input
              placeholder="Institution"
              value={edu.institution || ""}
              onChange={(e) =>
                handleChange(`education.${i}.institution`, e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              placeholder="Degree"
              value={edu.studyType || ""}
              onChange={(e) =>
                handleChange(`education.${i}.studyType`, e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              placeholder="Start Date"
              value={edu.startDate || ""}
              onChange={(e) =>
                handleChange(`education.${i}.startDate`, e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <input
              placeholder="End Date"
              value={edu.endDate || ""}
              onChange={(e) =>
                handleChange(`education.${i}.endDate`, e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addSection("education", {
              institution: "",
              url: "",
              area: "",
              studyType: "",
              startDate: "",
              endDate: "",
            })
          }
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <PlusCircle className="w-5 h-5" /> Add Education
        </button>
      </section>
    </div>
  );
}
