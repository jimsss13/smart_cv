import sampleResume from "@/data/sampleResume.json";

export default function Page() {
  const resume = sampleResume;

  const {
    basics,
    work,
    education,
    skills,
    languages,
    projects,
    awards,
    certificates,
    volunteer,
    publications,
    interests,
    references,
  } = resume;

  return (
    <main className="bg-gray-100 flex flex-col items-center py-10 print:bg-white">
      {/* PAGE 1 */}
      <div
        className="bg-white text-gray-900 p-10 leading-relaxed shadow-md
                   w-[210mm] min-h-[297mm] mb-8 print:shadow-none print:mb-0
                   flex flex-col justify-start"
      >
        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{basics?.name}</h1>
          <p className="text-sm text-gray-700 mt-1">
            {basics?.email} | {basics?.phone} | {basics?.location?.city},{" "}
            {basics?.location?.region}
          </p>
          {basics?.summary && (
            <p className="text-sm mt-3">{basics.summary}</p>
          )}
        </header>

        {/* EXPERIENCE */}
        {work?.length > 0 && (
          <section className="mb-8 break-inside-avoid">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Experience
            </h2>
            {work.map((job, index) => (
              <div key={index} className="mb-5 break-inside-avoid">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-semibold">{job.company}</h3>
                    <p className="italic text-sm">{job.position}</p>
                  </div>
                  <div className="text-sm text-gray-700 text-right">
                    <p>
                      {job.startDate} – {job.endDate || "Present"}
                    </p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                  {job.summary && <li>{job.summary}</li>}
                  {job.highlights?.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* EDUCATION */}
        {education?.length > 0 && (
          <section className="mb-8 break-inside-avoid">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <p className="italic text-sm">
                      {edu.studyType} in {edu.area}
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 text-right">
                    <p>{edu.endDate}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                {edu.courses?.length > 0 && (
                  <ul className="list-disc ml-6 mt-2 text-sm">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* SKILLS */}
        {skills?.length > 0 && (
          <section className="mb-8 break-inside-avoid">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Skills
            </h2>
            <ul className="text-sm space-y-1">
              {skills.map((skill, index) => (
                <li key={index}>
                  <span className="font-semibold">{skill.name}:</span>{" "}
                  {skill.keywords?.join(", ")}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* PAGE 2 */}
      <div
        className="bg-white text-gray-900 p-10 leading-relaxed shadow-md
                   w-[210mm] min-h-[297mm] print:shadow-none
                   flex flex-col justify-start print:break-before-page"
      >
        {/* PROJECTS */}
        {projects?.length > 0 && (
          <section className="mb-8">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Projects
            </h2>
            {projects.map((proj, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-semibold">{proj.name}</h3>
                <p className="text-sm">{proj.description}</p>
                {proj.url && (
                  <a
                    href={proj.url}
                    target="_blank"
                    className="text-blue-600 text-sm underline"
                  >
                    {proj.url}
                  </a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* AWARDS */}
        {awards?.length > 0 && (
          <section className="mb-8">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Awards
            </h2>
            {awards.map((award, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-semibold">{award.title}</h3>
                <p className="text-sm">
                  {award.awarder} – {award.date}
                </p>
                {award.summary && (
                  <p className="text-sm mt-1">{award.summary}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* CERTIFICATES */}
        {certificates?.length > 0 && (
          <section className="mb-8">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Certificates
            </h2>
            {certificates.map((cert, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm">
                  {cert.issuer} – {cert.date}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* VOLUNTEER */}
        {volunteer?.length > 0 && (
          <section className="mb-8 break-inside-avoid">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Volunteer
            </h2>
            {volunteer.map((vol, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-semibold">{vol.organization}</h3>
                <p className="text-sm italic">{vol.position}</p>
                <p className="text-sm">
                  {vol.startDate} – {vol.endDate}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* PUBLICATIONS */}
        {publications?.length > 0 && (
          <section className="mb-8 break-inside-avoid">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Publications
            </h2>
            {publications.map((pub, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-semibold">{pub.name}</h3>
                <p className="text-sm">
                  <span className="italic">{pub.publisher}</span>, {pub.releaseDate}
                </p>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    className="text-blue-600 text-sm underline"
                  >
                    {pub.url}
                  </a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* INTERESTS */}
        {interests?.length > 0 && (
          <section className="mb-8 break-inside-avoid">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              Interests
            </h2>
            <ul className="text-sm">
              {interests.map((interest, i) => (
                <li key={i}>
                  <span className="font-semibold">{interest.name}:</span>{" "}
                  {interest.keywords?.join(", ")}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* REFERENCES */}
        {references?.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="uppercase font-semibold tracking-wide border-b border-gray-400 pb-1 text-sm mb-3">
              References
            </h2>
            {references.map((ref, index) => (
              <div key={index} className="text-sm mb-2">
                <p className="font-semibold">{ref.name}</p>
                <p>{ref.reference}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
