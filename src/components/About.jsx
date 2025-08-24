import React from "react";
import profileImage from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="py-12 text-left" >
    <div className="flex items-start gap-266">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg"
          />

            <div>
                {/* <h2 className="text-xl font-semibold text-blue-900 mb-4"> About Me</h2> */}
                <p className="text-gray-700 leading-relaxed" />
                <p className="text-right ">
                I’m a seasoned SDET with expertise in automation testing using Java, Selenium, Appium, Rest Assured, TestNG,
                and CI/CD tools like Jenkins. I’ve delivered high-quality test automation frameworks for web, mobile, and API testing,
                ensuring faster releases and top-notch product quality. My work includes building scalable Page Object Model frameworks,
                integrating automated tests into pipelines, and optimizing regression suites to save execution time.
                I’m passionate about finding critical bugs early, improving test coverage, and collaborating closely with developers to deliver flawless software.
                </p>
            </div>
      </div>
    </section>
  );
}
