import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <section className="flex h-screen flex-col items-center justify-start gap-[1rem] py-[9rem]">
      <div>
        <h2>Login</h2>
        <p>Enter credentials to continue</p>
      </div>
      <div>
        <form onSubmit={handleForm}>
          <input type="text" placeholder="Enter user id/email" />
          <input type="password" placeholder="Enter Password" />
          <Button intent="primary">Submit</Button>
        </form>
      </div>
      <Link href="/" className="text-[#b4e251]">
        Go back to Site
      </Link>
    </section>
  );
};

export default Login;
