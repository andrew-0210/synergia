import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-start gap-[1rem] py-[9rem]">
      <h2>Login</h2>
      <Link href="/" className="text-[#b4e251]">
        Go back to Site
      </Link>
    </section>
  );
};

export default Login;
