"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UploadPage() {
  const searchParams = useSearchParams(); // allowed because inside component wrapped by Suspense

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    setUploadForm({
      ...uploadForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file before uploading!");
      return;
    }

    if (!uploadForm.title.trim()) {
      alert("Title is required!");
      return;
    }

    console.log("Uploading File:", selectedFile);
    console.log("Form Data:", uploadForm);

    alert("Uploaded successfully (dummy upload)!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>

      {/* File Upload Input */}
      <input
        type="file"
        onChange={handleFileSelect}
        className="border p-2 mb-4 w-full"
      />

      {/* Form Fields */}
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={uploadForm.title}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />

      <textarea
        name="description"
        placeholder="Enter description"
        value={uploadForm.description}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />

      <input
        type="text"
        name="tags"
        placeholder="tags (comma separated)"
        value={uploadForm.tags}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}

// ✅ Suspense wrapper (required by Vercel for useSearchParams)
export default function UploadPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UploadPage />
    </Suspense>
  );
}
