import React from "react";

export default function Projects() {
  const projects = [
    {
          title: "Playwright Automation Framework",
          desc: "Custom-built Playwright framework using javascript.",
          link: "https://github.com/paldheerendra/playwright-js-pilot",
    },
    {
      title: "Automation Framework",
      desc: "Custom-built Selenium + TestNG + Maven framework integrated with Jenkins.",
      link: "https://github.com/paldheerendra/RecruitCRMTest",
    },
    {
      title: "API Test Suite",
      desc: "Automated REST API tests using Rest Assured with detailed reporting.",
      link: "https://github.com/paldheerendra/api-testing",
    },
    {
      title: "Mobile Test Automation",
      desc: "Appium test scripts for Android/iOS apps with CI/CD integration.",
      link: "https://github.com/paldheerendra/Web_Mobile_BDD_Framework",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-3">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
