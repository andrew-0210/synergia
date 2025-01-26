"use client";
import { useRouter } from "next/navigation";
import {
  AiOutlineDollar,
  AiOutlineSetting,
  AiOutlineProduct,
  AiOutlineUser,
  AiOutlineTeam,
} from "react-icons/ai";

const DashNav = () => {
  const router = useRouter();

  const handleDashboard = () => {
    router.push("/dashboard");
  };
  const handleRecruitment = () => {
    router.push("/recruitment");
  };
  const handlePayroll = () => {
    router.push("/payroll");
  };
  const handleEmployees = () => {
    router.push("/employees");
  };
  const handleSettings = () => {
    router.push("/settings");
  };
  return (
    <section className="fixed bottom-0 w-full from-[#000000] to-transparent md:mx-auto md:bg-gradient-to-t md:py-[1rem]">
      <nav className="flex w-full justify-center gap-2 rounded-lg border border-[#2a2a2a] bg-[#191919] p-2 md:mx-auto md:w-fit">
        <button
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-md p-2 text-[0.75rem] text-[#b4e251] hover:bg-[#2a2a2a] md:flex-row md:gap-2 lg:text-[1rem]"
          onClick={handleDashboard}
        >
          <AiOutlineProduct size={24} color="#b4e251" /> Dashboard
        </button>
        <button
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-md p-2 text-[0.75rem] hover:bg-[#2a2a2a] md:flex-row md:gap-2 lg:text-[1rem]"
          onClick={handleRecruitment}
        >
          <AiOutlineUser size={24} color="#b4e251" /> Recruitment
        </button>
        <button
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-md p-2 text-[0.75rem] hover:bg-[#2a2a2a] md:flex-row md:gap-2 lg:text-[1rem]"
          onClick={handleEmployees}
        >
          <AiOutlineTeam size={24} color="#b4e251" /> Employees
        </button>
        <button
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-md p-2 text-[0.75rem] hover:bg-[#2a2a2a] md:flex-row md:gap-2 lg:text-[1rem]"
          onClick={handlePayroll}
        >
          <AiOutlineDollar size={24} color="#b4e251" /> Payroll
        </button>

        <button
          className="flex flex-1 flex-col items-center justify-center gap-1 rounded-md p-2 text-[0.75rem] hover:bg-[#2a2a2a] md:flex-row md:gap-2 lg:text-[1rem]"
          onClick={handleSettings}
        >
          <AiOutlineSetting size={24} color="#b4e251" /> Settings
        </button>
      </nav>
    </section>
  );
};

export default DashNav;
