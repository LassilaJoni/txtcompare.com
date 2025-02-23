import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} TxtCompare. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="/privacy"
            className="text-sm hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/about"
            className="text-sm hover:text-white transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </footer>
  );
}
