'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      fetch('foo').then(() => { setLoaded(true); console.log("Loading") });

    } catch (error) {
      throw new Error("Error: fetch did not work: " + error);
    }
    // alert("Hello Side Effect!");
    // return alert("Goodbye Side Effect!");
    setTimeout(() => console.log("Set TimeOut for 3 seconds!", 3000));
    setLoaded(false);
  }, [count]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-xl h-[50vh] z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex flex-col">
        <p>React Hooks!!</p>
        <button onClick={() => setCount(count + 1)} className="border bg-rose-400 px-3 py-2 w-[24]">
          {count}
        </button>
        {loaded ? <p>loading</p> : <h2>Home Page!!</h2>}
      </div>
    </main>
  );
}
