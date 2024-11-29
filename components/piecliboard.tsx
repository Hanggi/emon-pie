'use client';

import React, { useState } from 'react';

const PieClipboardInput: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0x....');
    setCopied(true);

    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="relative flex items-center justify-between w-full bg-[#ffdd64] text-black border border-primary rounded-full h-[50px] px-6">
      <span className="text-lg sm:text-2xl">
        捐赠地址：<span className="opacity-80">0x....</span>
      </span>

      <div className="flex items-center">
        <div className="h-6 w-[1px] bg-primary mx-3"></div>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center"
          aria-label="Copy to clipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copy rotate-90"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </button>
      </div>

      {copied && (
        <span className="absolute top-[-30px] right-4 bg-[#ffdd64] text-black px-2 py-1 rounded">
          Copied!
        </span>
      )}
    </div>
  );
};

export default PieClipboardInput;
