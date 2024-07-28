"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>Welcome to the Formwork Estimator Application</header>
      <div className="flex flex-col items-center">
          <button
            onClick={handleSignIn}
            className="text-lg border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2"
          >
            Sign In
          </button>
        </div>
    </main>
  );
}
