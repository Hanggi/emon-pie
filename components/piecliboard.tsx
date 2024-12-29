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
    <div className="relative flex h-[50px] w-full items-center justify-between rounded-full border border-black bg-[#ffdd64] px-6 text-black">
      <span className="text-lg sm:text-2xl">
        捐赠地址：
        <span className="opacity-80">
          FMXsEZ1N8y7wKDL45RBNZKkzU8WVkWt3u8bQ92SKe7G2
        </span>
      </span>

      <div className="flex items-center">
        <div className="bg-primary mx-3 h-6 w-px"></div>

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
        <span className="absolute right-4 top-[-30px] rounded bg-[#ffdd64] px-2 py-1 text-black">
          Copied!
        </span>
      )}
    </div>
  );
};

export default PieClipboardInput;
