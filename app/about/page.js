import Link from "next/link";

export default function About() {
    return (
        <main className="m-4">
        <h1 className="text-2xl font-bold underline text-center">
            About
        </h1>
        <section className="m-8 text-white text-lg font-bold mx-4 text-center">
            <p>
                Created by: <span className="text-white text-lg font-bold">Ian Stoesz</span>
            </p>
            <p>
                Date: <span className="text-white text-lg font-bold">Aug 5, 2024</span>
            </p>
            <p>
                For: <span className="text-white text-lg font-bold">Web Development 2, Software Development, SAIT</span>
            </p>
        </section>
        <p className="m-2 text-white text-lg font-bold mx-4">
            This is an estimator app that calculates the volume of concrete and reinforcing steel needed for a footing and wall.
        </p>
        <p className="m-2 text-white text-lg font-bold mx-4">
            
        </p>
        <p className="m-2 text-white text-lg font-bold mx-4">
            The app is built using React and Tailwind CSS.
        </p>
        <section className="m-2 text-white text-lg font-bold mx-4">
            <h3>Citations:</h3>
            <p>Sign-In Page Background Image: Microsoft Stock Images, Microsoft 365 PowerPoint. Accessed: Aug 5, 2024. Available: https://www.microsoft.com/en-us/microsoft-365/powerpoint</p>
            <p>Dashboard Page Background Image: Microsoft Stock Images, Microsoft 365 PowerPoint. Accessed: Aug 5, 2024. Available: https://www.microsoft.com/en-us/microsoft-365/powerpoint</p>
        </section>
        <span className="flex flex-col items-center m-40">
        <button className="bg-green-700 hover:bg-green-500 hover:underline rounded-md p-2 text-lg mb-14 border-solid border-2 border-black">
            <Link href="/">Home</Link>
        </button>
        </span>
        </main>
    );
    }