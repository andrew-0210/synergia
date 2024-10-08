import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  intent?: "primary" | "secondary";
  size?: "default";
  btnType?: "icon" | "button";
};

const button = cva("lg:py-[0.5rem] px-[1rem] rounded-lg py-[0.75rem]", {
  variants: {
    intent: {
      primary:
        "bg-[#9a6aff] font-medium tracking-normal border border-[#cbb2ff] text-[#f5f5f5] leading-snug",
      secondary:
        "bg-[#1b1b1b] font-medium tracking-normal border border-[#414141] text-[#f5f5f5] leading-snug",
    },
    size: { default: "min-w-[120px]" },
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
