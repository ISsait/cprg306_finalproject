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
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundImage: `url('./background.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="text-4xl text-black font-bold p-2 border-solid border-2 border-black rounded-md">
        Welcome to the Formwork Estimator Application
      </header>

      {user ? (
        <div className="flex flex-col items-center justify-between p-2">
          <span className="text-lg m-4 text-black font-bold">
            Signed In as {user.email || user.displayName}
          </span>
          <button className="bg-green-700 hover:bg-green-500 hover:underline rounded-md p-2 text-lg mb-14 border-solid border-2 border-black">
            <Link href="/dashboard">Go To Dashboard</Link>
          </button>

          <span>
            <button
              onClick={handleSignOut}
              className="text-lg border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2"
            >
              Sign Out
            </button>
          </span>
        </div>
      ) : (
        <span className="flex flex-col items-center justify-between p-24">
          <p className="text-black text-lg font-bold">Please Sign In</p>
          <button
            onClick={handleSignIn}
            className="text-lg border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2"
          >
            Sign In
          </button>
        </span>
      )}
    </main>
  );
}
