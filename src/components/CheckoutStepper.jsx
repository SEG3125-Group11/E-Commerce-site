import React from 'react';
import { useLocation } from 'react-router-dom';

const steps = ["Cart", "Checkout", "Review"];

const CheckoutStepper = () => {
  const location = useLocation();

  const currentStepIndex = (() => {
    if (location.pathname.includes("review")) return 2;
    if (location.pathname.includes("checkout")) return 1;
    return 0;
  })();

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center w-full">
            <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold z-10 ${
              index <= currentStepIndex ? 'bg-primary' : 'bg-gray-300'
            }`}>
              {index + 1}
            </div>
            <div className="ml-2 text-sm font-semibold text-textdark">
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className="flex-grow h-1 bg-gray-300 mx-2">
                <div
                  className={`h-1 transition-all duration-300 ${
                    index < currentStepIndex ? 'bg-primary w-full' : 'bg-gray-300 w-0'
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutStepper;
