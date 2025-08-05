import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Ural Altay</h1>
        <p className="text-lg text-gray-600">Software Engineer | Data Scientist | Cybersecurity Enthusiast</p>
        <div className="flex justify-center gap-4 mt-4 text-blue-600">
          <a href="mailto:your.email@example.com">📧</a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-base text-gray-700">
          Software Engineer with over 5 years of experience designing and developing scalable backend systems.
          Recently completed a Data Science and Cybersecurity certification from UCLA Extension.
        </p>
      </section>

      <section className="mt-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 shadow p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Sign Language Glove Capstone</h3>
            <p className="text-sm text-gray-600">ML system for ASL using sensor data.</p>
            <a href="#" className="text-blue-600 mt-2 block">View on GitHub</a>
          </div>
          <div className="bg-gray-50 shadow p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Breast Cancer Subtype Classifier</h3>
            <p className="text-sm text-gray-600">CNN/LSTM model on TCGA genomic data.</p>
            <a href="#" className="text-blue-600 mt-2 block">View on GitHub</a>
          </div>
          <div className="bg-gray-50 shadow p-4 rounded-lg">
            <h3 className="font-semibold text-lg">AlphaShop Penetration Testing</h3>
            <p className="text-sm text-gray-600">Security assessment using SQLi/XSS.</p>
            <a href="#" className="text-blue-600 mt-2 block">Download Report</a>
          </div>
        </div>
      </section>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Languages:</strong> Python, C#, SQL, JavaScript</li>
          <li><strong>Frameworks:</strong> .NET, Flask, TensorFlow, Keras</li>
          <li><strong>Tools:</strong> Git, Docker, Azure, AWS</li>
          <li><strong>Cybersecurity:</strong> Metasploit, Burp Suite, Wireshark</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 Ural Altay. All rights reserved.
      </footer>
    </div>
  );
}
