import React, { useState, useEffect, useRef } from "react";

const VoiceSearch = ({ onSearch }) => {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setError("");
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript
          .trim() // Remove leading/trailing spaces
          .replace(/\.$/, ""); // Remove trailing period if it exists
        onSearch(transcript);
      };

      recognitionRef.current.onerror = (event) => {
        setError("Error occurred in recognition: " + event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setError("Speech recognition is not supported in your browser.");
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onSearch]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
      } catch (error) {
        setError("Error starting speech recognition. Please try again.");
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleListening}
        className={`p-2 rounded-full transition-colors duration-200 ${
          isListening
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        }`}
        title={isListening ? "Stop listening" : "Start voice search"}
      >
        {isListening ? (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        )}
      </button>

      {error && (
        <div className="absolute top-full left-0 mt-2 p-2 bg-red-100 text-red-700 rounded-md text-sm z-50">
          {error}
        </div>
      )}

      {isListening && (
        <div className="absolute top-full left-0 mt-2 p-2 bg-blue-100 text-blue-700 rounded-md text-sm z-50">
          Listening...
        </div>
      )}
    </div>
  );
};

export default VoiceSearch;
