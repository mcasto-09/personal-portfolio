import { useState } from "react";
import "./Landing.css";

function App() {
  const [count, setCount] = useState(0);
  const TypingEffect = () => {
    // return (
    //   <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
    //     <div className="w-max">
    //     </div>
    //   </div>
    // );
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://reactjs.org" target="_blank">
          {" "}
        </a>
      </div>
      <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
        <h1>Hello</h1>
        <h2>I'm Mary,</h2>
        <h3>I'll be your next favorite developer</h3>
      </div>
    </div>
  );
}

export default App;
