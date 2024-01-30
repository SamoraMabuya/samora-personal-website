// pages/success.jsx
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="max-w-md w-full text-center">
        <h1 className="text-xl font-semibold text-green-500">
          Payment Successful
        </h1>
        <p className="mt-3 text-base text-gray-600">
          Thank you for your purchase! You now have access to premium features.
        </p>
        <Link href="https://www.figma.com/community/plugin/1300043926906272268/neonize">
          <p className="mt-5 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Return to Figma
          </p>
        </Link>
      </div>
    </div>
  );
}
