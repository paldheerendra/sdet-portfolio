import React from "react";

export default function Contact() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Me</h2>
      <p>Email: <a href="mailto:dheerendras06@outlook.com" className="text-blue-600 hover:underline">dheerendras06@outlook.com</a></p>
      <p>Call: <a href="tel:+919766210123" className="text-blue-600 hover:underline">+91 9766210123</a></p>
      <p>whatsapp: <a href="https://wa.me/919766210123" className="text-blue-600 hover:underline">+91 9766210123</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/dheerendrapal" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/dheerendrapal</a></p>
      <p>GitHub: <a href="https://github.com/paldheerendra" target="_blank" className="text-blue-600 hover:underline">github.com/paldheerendra</a></p>
      <p>Twitter: <a href="https://twitter.com/Dheerendra_pal" target="_blank" className="text-blue-600 hover:underline">twitter.com/Dheerendra_pal</a></p>
    </section>
  );
}
