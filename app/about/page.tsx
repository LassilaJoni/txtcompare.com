"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Our Text Comparison Tool</h1>
      <p className="text-lg mb-4">
        Welcome to TxtCompare! Our website is designed to help you quickly and accurately compare texts side-by-side. Whether you're a writer, developer, or just need to track changes in your documents, our tool provides a clear, intuitive way to spot differences and improve your workflow.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Our Mission</h2>
      <p className="text-lg mb-4">
        At TxtCompare, our mission is to simplify the process of text comparison. We aim to provide a user-friendly platform that empowers you to review changes effortlessly and ensure accuracy in your work. By leveraging modern web technologies like Next.js and Tailwind CSS, we ensure a fast, reliable, and responsive experience for all users.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Side-by-side text comparison</li>
        <li>Highlight differences for quick review</li>
        <li>Easy-to-use interface optimized for all devices</li>
        <li>Copy content between texts with a single click</li>
      </ul>
      <h2 className="text-2xl font-bold mt-6 mb-2">Why Choose Us?</h2>
      <p className="text-lg mb-4">
        Our commitment to simplicity and efficiency sets us apart. We continually work to enhance our tool based on user feedback and industry best practices, ensuring that you always have the best experience possible.
      </p>
    </main>
  );
}
