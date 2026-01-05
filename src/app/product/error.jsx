'use client';

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
    const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold text-red-500">
        Something went wrong...
      </h2>

      <p className="text-gray-400 text-sm">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
            <button
        onClick={() => {router.back()}}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
}
