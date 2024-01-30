// pages/cancel.jsx
import Link from "next/link";

// pages/cancel.jsx
export default function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="max-w-md w-full text-center">
        <h1 className="text-xl font-semibold text-red-500">Payment Canceled</h1>
        <p className="mt-3 text-base text-gray-600">
          Your transaction was not completed.
        </p>
      </div>
    </div>
  );
}
