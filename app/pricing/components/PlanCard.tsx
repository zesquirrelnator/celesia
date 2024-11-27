interface Plan {
    name: string;
    priceMonthly: number;
    priceYearly: number;
    description: string;
    features: string[];
    icon: string;
    highlighted?: boolean;
}
  
interface PlanCardProps {
    plan: Plan;
    isYearly: boolean;
}
  
export default function PlanCard({ plan, isYearly }: PlanCardProps) {
    return (
      <div
        className={`relative p-6 rounded-3xl shadow-md ${
          plan.highlighted
            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        }`}
      >
        <div className="flex justify-center items-center text-4xl mb-4">
          <span className="p-2 bg-blue-100 text-blue-500 rounded-full">{plan.icon}</span>
        </div>
        <h2 className="text-xl font-semibold">{plan.name}</h2>
        <p className="mt-2 text-sm">{plan.description}</p>
        <p className="mt-4 text-4xl font-bold">
          ${isYearly ? plan.priceYearly / 10 : plan.priceMonthly}
          <span className="text-base font-medium">/mo</span>
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center justify-center">
              <span className="text-blue-500 mr-2">✔</span> {feature}
            </li>
          ))}
        </ul>
        <button
          className={`mt-8 w-full py-3 rounded-lg ${
            plan.highlighted
              ? "bg-white text-blue-500 hover:bg-gray-100"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {plan.highlighted ? "Get started for free" : "Sign up"}
        </button>
      </div>
    );
  }
  