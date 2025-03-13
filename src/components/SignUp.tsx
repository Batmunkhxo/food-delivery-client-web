"use client";
import { useState } from "react";
import FirstStep from "./SignupNeg"; // Ensure the file exists here
import SecondStep from "./SignupHoyr"; // Ensure the file exists here
import ThirdStep from "./SignupGurav"; // Ensure the file exists here

const CreateAccount = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex w-full justify-between h-screen">
      <div className="w-2/5 h-full flex justify-center items-center text-gray-500 text-sm">
        {step === 1 && <FirstStep setStep={setStep} />}
        {step === 2 && <SecondStep setStep={setStep} />}
        {step === 3 && <ThirdStep setStep={setStep} />}
      </div>
      <div className="w-3/5 h-screen">
        <img src="./hurgelt.png" alt="Bicycle" />
      </div>
    </div>
  );
};

export default CreateAccount;
