"use client";
import { useState } from "react";
import TagHeader from "./components/TagHeader";
import Header from "@/app/landing-components/Header";
import ToggleSwitch from "./components/ToggleSwitch";
import { navigation } from '@/app/landing-components/contentSections';
import { BottomGradient, TopGradient } from "../landing-components/Hero";
import { usePostHog } from "posthog-js/react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const posthog = usePostHog();

  const handleClick = () => {
    posthog.capture("cta_clicked", { location: "Pricing" });
    window.location.href = "https://app.celesia.io/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-100 to-purple-50 dark:bg-gray-900 py-12 px-6 lg:px-8 text-center">
      <Header navigation={navigation} />
      <TagHeader />
      
      {/* Toggle Switch for Monthly/Yearly */}
      <ToggleSwitch isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
      
      {/* Single Pricing Plan */}
      <div className="max-w-lg mx-auto">
        <div className="relative p-8 rounded-3xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <div className="flex justify-center items-center text-4xl mb-4">
            <span className="p-2 bg-blue-100 text-blue-500 rounded-full">⭐</span>
          </div>
          <h2 className="text-2xl font-semibold">
            All-Inclusive Plan
            <span className="text-red-300 text-sm ml-2">beta</span>
          </h2>
          <p className="mt-2 text-sm">Best for everyone who wants everything we offer.</p>
          <p className="mt-4 text-5xl font-bold">
            ${isYearly ? "59.99" : "6.99"}
            <span className="text-base font-medium">/{isYearly ? "yr" : "mo"}</span>
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center justify-center">
              <span className="text-blue-100 mr-2">✔</span> Full feature access
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-100 mr-2">✔</span> Unlimited Integrations
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-100 mr-2">✔</span> Unlimited data storage
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-100 mr-2">✔</span> Priority support
            </li>
          </ul>
          <button onClick={handleClick} className="mt-8 w-full py-3 rounded-lg bg-white text-blue-500 hover:bg-gray-100">
            Sign up
          </button>
          <p className="mt-4 text-sm text-gray-200">Get started for free</p>
        </div>
      </div>
      
      {/* Optional Gradients */}
      <TopGradient />
      <BottomGradient />
    </div>
  );
}
