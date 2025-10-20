"use client";

import { useState } from "react";
import { Resume } from "@/types/resume";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";

export default function DynamicResumePage() {
  const [resume, setResume] = useState<Resume>({
    basics: {
      name: "",
      label: "",
      image: "",
      email: "",
      phone: "",
      url: "",
      summary: "",
      location: { city: "", region: "", countryCode: "" },
      profiles: [{ network: "", username: "", url: "" }],
    },
    work: [
      {
        name: "",
        position: "",
        url: "",
        startDate: "",
        summary: "",
        highlights: ["", "", ""],
      },
    ],
    education: [
      {
        institution: "",
        url: "",
        area: "",
        studyType: "",
        startDate: "",
        endDate: "",
      },
    ],
    certificates: [{ name: "", issuer: "", date: "", url: "" }],
    publications: [
      { name: "", publisher: "", releaseDate: "", url: "", summary: "" },
    ],
    skills: [{ name: "", level: "", keywords: ["", "", ""] }],
    awards: [{ title: "", date: "", awarder: "", summary: "" }],
    languages: [{ language: "", fluency: "" }],
    interests: [{ name: "", keywords: ["", ""] }],
    projects: [
      {
        name: "",
        startDate: "",
        endDate: "",
        description: "",
        highlights: ["", ""],
        url: "",
      },
    ],
    references: [{ name: "", reference: "" }],
  });

  return (
    <main className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 min-h-screen text-black">
      <div className="flex-1 overflow-y-auto">
        <ResumeForm resume={resume} setResume={setResume} />
      </div>
      <div className="flex-1 flex justify-center overflow-y-auto">
        <ResumePreview resume={resume} />
      </div>
    </main>
  );
}
