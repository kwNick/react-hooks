'use client';
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-xl h-[50vh] z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex flex-col">
        <p>React Hooks!!</p>
        <button onClick={() => setCount(count + 1)} className="border bg-rose-400 px-3 py-2 w-[24]">
          {count}
        </button>
      </div>
    </main>
  );
}
