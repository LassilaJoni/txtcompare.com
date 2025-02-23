"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const DiffViewer = dynamic(() => import("react-diff-viewer"), { ssr: false });

export default function TextDiffChecker() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");


  function copyLeftToClipboard() {
    navigator.clipboard
      .writeText(leftText)
      .then(() => alert("Left text copied to clipboard!"))
      .catch((err) => console.error("Failed to copy left text: ", err));
  }

  // Copies right text to the clipboard
  function copyRightToClipboard() {
    navigator.clipboard
      .writeText(rightText)
      .then(() => alert("Right text copied to clipboard!"))
      .catch((err) => console.error("Failed to copy right text: ", err));
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Compare Texts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <textarea
            className="w-full border p-2 rounded mb-2"
            rows={10}
            placeholder="Paste first version of a text here"
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-700 text-white rounded"
            onClick={copyLeftToClipboard}
          >
            Copy Left to Clipboard
          </button>
        </div>
        <div>
          <textarea
            className="w-full border p-2 rounded mb-2"
            rows={10}
            placeholder="Paste second version of a text here"
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-700 text-white rounded"
            onClick={copyRightToClipboard}
          >
            Copy Right to Clipboard
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <DiffViewer
          oldValue={leftText}
          newValue={rightText}
          splitView={true}
          showDiffOnly={false}
        />
      </div>
    </main>
  );
}