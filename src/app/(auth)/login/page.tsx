import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-start gap-[1rem] py-[9rem]">
      <div className="">
        <h2>Login</h2>
        <p>Enter credentials to continue</p>
      </div>
      <div className="flex flex-col gap-4 text-[#0e0e0e]">
        <input type="text" placeholder="Enter user id/email" />
        <input type="password" placeholder="Enter Password" />
        <Button intent="primary">Submit</Button>
      </div>
      <Link href="/" className="text-[#b4e251]">
        Go back to Site
      </Link>
    </section>
  );
};

export default Login;
