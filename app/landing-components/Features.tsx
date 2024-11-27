import { BottomGradient, TopGradient } from "./Hero";
import StartCard from "./StartCard";

interface Feature {
  name: string;
  description: string;
  icon: string;
  href: string;
}

export default function Features({ features }: { features: Feature[] }) {
  return (
    <div id="features" className="mx-auto mt-24 max-w-7xl px-6 lg:px-8 relative">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full px-4 py-1 w-fit mx-auto shadow-md">
          Solution
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Turn your health data into <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">actionable</span> insights.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Don’t just guess your health. Use Celestia for data-driven insights.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={`${feature.name}-${index}`} // Combine name and index for unique key
            className="group flex flex-col items-start p-8 bg-white rounded-2xl shadow-md transition transform hover:-translate-y-2 hover:shadow-lg dark:bg-gray-900 cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-500 text-2xl mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600">
              {feature.name}
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Card */}
      <div className="mt-24">
        <StartCard />
      </div>

      <TopGradient />
      <BottomGradient />
    </div>
  );
}