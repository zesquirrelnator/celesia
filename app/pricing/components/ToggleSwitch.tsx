interface ToggleSwitchProps {
    isYearly: boolean;
    onToggle: () => void;
}
  
export default function ToggleSwitch({ isYearly, onToggle }: ToggleSwitchProps) {
    return (
      <div className="flex items-center justify-center mt-8 mb-8">
        <span className="text-gray-600 dark:text-gray-300">Pay monthly</span>
        <div className="mx-2 relative" onClick={onToggle}>
          <input type="checkbox" className="hidden" checked={isYearly} readOnly />
          <div
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isYearly ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                isYearly ? "translate-x-6" : ""
              }`}
            />
          </div>
        </div>
        <span className="text-gray-600 dark:text-gray-300">
          Pay yearly <span className="text-blue-500">Save up to 30%</span>
        </span>
      </div>
    );
}  