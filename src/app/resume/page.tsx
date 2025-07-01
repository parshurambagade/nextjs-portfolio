"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // Redirect to Google Drive resume link
    window.location.href =
      "https://drive.google.com/file/d/1l7dqcWOK4E78L7QeSOWR1B53nMGUvsU0/view";
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white text-lg">Redirecting to resume...</p>
        <p className="text-gray-400 text-sm mt-2">
          If you&apos;re not redirected automatically,
          <a
            href="https://drive.google.com/file/d/1l7dqcWOK4E78L7QeSOWR1B53nMGUvsU0/view"
            className="text-blue-400 hover:text-blue-300 underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
