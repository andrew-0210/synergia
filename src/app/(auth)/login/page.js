"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const username = "admin";
  const hardCodedPassword = "password123";

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (username === username && password === hardCodedPassword) {
      setError("");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }

    setPassword("");
    setUserName("");
  };

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-[1rem]">
      <div className="">
        <h2 className="text-center">Login</h2>
        <p>Enter credentials to continue</p>
      </div>

      <form
        className="flex min-w-[20em] flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col gap-1">
          <label htmlFor="user_name">Username</label>
          <input
            className="rounded-md bg-[#2a2a2a] px-2 py-2 text-[#e8e8e8] outline outline-[2px] outline-[#3f3f3f]"
            type="text"
            placeholder="Enter user id/email"
            id="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </section>
        <section className="relative flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="rounded-md bg-[#2a2a2a] px-2 py-2 text-[#e8e8e8] outline outline-[2px] outline-[#3f3f3f]"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400">{error}</p>}
          <button
            type="button"
            className="absolute right-2 top-[2.4rem]" // Position the icon button
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiFillEyeInvisible size={24} color="#e8e8e8" />
            ) : (
              <AiFillEye size={24} color="#e8e8e8" />
            )}
          </button>
        </section>
        <Button intent="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>

      <Link href="/" className="text-[#b4e251]">
        Back to Site
      </Link>
    </section>
  );
};

export default Login;
