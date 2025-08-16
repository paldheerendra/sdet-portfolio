import React from "react";

export default function Skills() {
  const skills = [
    { title: "Programming", items: "Java, Python" },
    { title: "Automation Tools", items: "Selenium, Appium, Rest Assured, Playwright" },
    { title: "Testing", items: "Cucumber, TestNG, JUnit, Postman" },
    { title: "CI/CD", items: "Jenkins, Git, Docker" },
    { title: "Performance", items: "JMeter" },
    { DBMS: "SQL, Postgres" },
    { Cloud: "Azure" },
    { title: "Soft Skills", items: "Problem Solving, Teamwork, Communication" },
    { title: "Languages", items: "English, Hindi" },
    { title: "Certifications", items: "ISTQB, Certified Tester Foundation Level" }
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Skills</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">{skill.title}</h3>
            <p>{skill.items}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
