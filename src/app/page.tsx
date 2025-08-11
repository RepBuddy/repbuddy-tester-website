"use client";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { addTester } from "./services/api";
import { errorMessages } from "./errors";
import Checkbox from "./components/Checkbox";

export default function Home() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);  // <-- track checkbox

  const handleSignUp = async () => {
    if (!email) {
      return setError("Email is required");
    }

    try {
      const newTester = await addTester(email);
      if (newTester.status === 200) {
        setSignedUp(true);
        setError("");
      } else {
        const data = await newTester.data;
        setError(errorMessages[data.errorCode] || "Sign up failed");
      }
    } catch (error) {
      setError("Sign up failed");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen min-w-screen font-montserrat p-10">
      <div className="flex flex-col items-center justify-center w-full ">
        <h1 className="text-4xl font-bold header-color text-center">Track. Compete. Progress.</h1>
        <p className="description-color text-center">Be among the first to experience the ultimate gym tracker built for real progress. Help us shape the app, unlock new features early, and connect with a community that’s all about pushing limits — all for free. Sign up now and start tracking every rep like a pro!</p>
      </div>
      <div className="flex flex-col justify-center w-full gap-4">
        <Input placeholder="jim@repbuddy.org" value={email} setValue={setEmail} />
        <Checkbox id="privacypolicy" label="I agree to the" span="Privacy Policy" checked={agreed} setChecked={setAgreed} url="https://www.repbuddy.org/privacy-policy" />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <Button agreed={agreed} onClick={() => handleSignUp()} text="Sign Up" />
      </div>

      {signedUp && (
        <Alert title="Success!" description="You have successfully signed up for beta testing! You can cancel at anytime." />
      )}

      {error && (
        <Alert title="Error!" description={error} />
      )}
    </div>

  );
}
