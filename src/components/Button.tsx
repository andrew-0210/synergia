import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  intent?: "primary" | "secondary";
  size?: "default";
  btnType?: "icon" | "button";
};

const button = cva("lg:py-[0.5rem] px-[2rem] rounded-lg py-[0.75rem]", {
  variants: {
    intent: {
      primary:
        "bg-[#9a6aff] font-semibold tracking-tight border border-[#cbb2ff] text-[#f5f5f5] ",
      secondary:
        "bg-gradient-to-tr from-[#1b1b1b] via-[#3333333] to-[#1b1b1b] font-semibold tracking-tight border border-[#414141] text-[#f5f5f5] ",
    },
    size: { default: "min-w-[183px]" },
    btnType: {
      button: "",
      icon: "px-0 rounded-lg py-0",
    },
  },
  compoundVariants: [
    {
      btnType: "icon",
      size: "default",
      className: "h-10 w-10",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "default",
    btnType: "button",
  },
});

const Button = ({
  intent,
  size,
  btnType,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(button({ intent, size, btnType, className }))}
      {...props}
    />
  );
};

export default Button;
