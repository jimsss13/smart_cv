"use client";

import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";

// Initial state before the user enters data or loads saved data
const blankResume: Resume = {
  basics: { name: "", label: "", image: "", email: "", phone: "", url: "", summary: "", location: { city: "", region: "", countryCode: "" }, profiles: [{ network: "", username: "", url: "" }], },
  work: [{ name: "", position: "", url: "", startDate: "", summary: "", highlights: ["", "", ""], }],
  education: [{ institution: "", url: "", area: "", studyType: "", startDate: "", endDate: "", }],
  certificates: [{ name: "", issuer: "", date: "", url: "" }],
  publications: [{ name: "", publisher: "", releaseDate: "", url: "", summary: "" }],
  skills: [{ name: "", level: "", keywords: ["", "", ""] }],
  awards: [{ title: "", date: "", awarder: "", summary: "" }],
  languages: [{ language: "", fluency: "" }],
  interests: [{ name: "", keywords: ["", ""] }],
  projects: [{ name: "", startDate: "", endDate: "", description: "", highlights: ["", ""], url: "" }],
  references: [{ name: "", reference: "" }],
  volunteer: [{ organization: "", position: "", startDate: "", endDate: "" }],
};

// Save the resume data
const LOCAL_STORAGE_KEY = 'dynamicResumeData';

export default function DynamicResumePage() {
  const [resume, setResume] = useState<Resume>(blankResume);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);
    const savedResume = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedResume) {
      try {
        const parsedResume = JSON.parse(savedResume);
        setResume(parsedResume);
      } catch (e) {
        console.error("Failed to parse saved resume data:", e);
      }
    }
  }, []);

  // Save the changes of resume state to localstorage 
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resume));
    }
  }, [resume, isClient]);

  // Print the current resume JSON to console
  const handleShowJson = () => {
    console.log(JSON.stringify(resume, null, 2));
  };

  if (!isClient) {
      return null; 
  }


  return (
    <main className="flex flex-col md:flex-row gap-8 p-8 bg-gray-100 min-h-screen text-black">
      <div className="flex-1 overflow-y-auto">
        <ResumeForm resume={resume} setResume={setResume} />
        <button
          onClick={handleShowJson}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Print JSON
        </button>
      </div>
      <div className="flex-1 flex justify-center overflow-y-auto">
        <ResumePreview resume={resume} />
      </div>
    </main>
  );
}