import { useState } from "react";
import "./login.css";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(){
    console.log(email,password);
    
  }

  return (
    <div className="pic-bg flex justify-center items-center">
      <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-lg flex flex-col items-center relative justify-center">
        <h1 className="text-4xl text-center p-[15px] absolute top-[40px]">
          Login
        </h1>
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[80%] bg-[#00000000] text-black border-[2px] placeholder:text-black h-[40px] px-[10px] mb-5"
          defaultValue={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter your Password "
          className="w-[80%] bg-[#00000000] text-black border-[2px] placeholder:text-black h-[40px] px-[10px] mb-5"
          defaultValue={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="w-[80%] absolute bg-blue-400 text-white h-[50px] bottom-[40px]"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
