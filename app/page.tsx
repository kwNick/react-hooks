'use client';
import { createContext, useContext, useEffect, useRef, useState } from "react";
// import ContextComp from "./components/ContextComp";
const counter = 0;
const CountContext = createContext(counter);
export default function Home() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const myBtn = useRef<HTMLButtonElement | null>(null);
  // console.log(myBtn);
  // const clickIt = () => myBtn?.current?.click();

  const changeLoaded = () => {
    // console.log("Changed to " + loaded)
    setLoaded(false)
  }
  useEffect(() => {
    try {
      // fetch('foo').then(() => { setLoaded(true); console.log("Loading") });
      setLoaded(true);
      setTimeout(() => changeLoaded(), 3000);
      // console.log("make a fetch request!");


    } catch (error) {
      throw new Error("Error: fetch did not work: " + error);
    }
    // alert("Hello Side Effect!");
    // return alert("Goodbye Side Effect!");

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
      <div>
        <button ref={myBtn} >Reference</button>
      </div>
      <CountContext.Provider value={counter} >
        <div>Counter: {counter}</div>
        <ContextComp />
      </CountContext.Provider>
    </main>
  );
}

const ContextComp = () => {
  const prop = useContext(CountContext)
  return (
    <div className=" w-[55vw] flex flex-col items-center p-5 gap-y-6">
      <h2 className="group relative uppercase tracking-wide text-lg border-b border-b-red-400
       overflow-hidden">
        Making Use of
        <span className="normal-case">CreateContext()</span>
        Hooks in React!
        <span className="absolute w-[15%] h-[5%] -left-[15%] bottom-0 border-b border-b-gray-600 z-20
        group-hover:translate-x-[100%] duration-200" />
      </h2>
      <p>We passed the count value, of {prop} to this component so we can keep using it through out our project without having to pass props</p>
    </div>
  )
}