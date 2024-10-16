import Link from "next/link";

const Settings = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start pt-[6rem]">
      <h1>Settings</h1>
      <Link href="/" className="text-red-700">
        Logout
      </Link>
    </div>
  );
};

export default Settings;
