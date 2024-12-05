"use client";
import { posthogClient } from '@/lib/posthog'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function GetStarted() {
    const handleClick = () => {
      posthogClient.capture("cta_clicked", { location: "Hero" });
      console.log("clicked!");
      window.location.href = "https://app.celesia.io/";
    };
  
    return (
      <button
        onClick={handleClick}
        className="flex items-center duration-300 ease-in-out font-semibold text-white bg-blue-400 hover:bg-blue-500 dark:text-white px-4 py-2 rounded-lg transform hover:scale-105"
      >
        Get Started <FaArrowRight size="1.1rem" className="ml-1" />
      </button>
    );
  }
