import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  intent?: "primary" | "secondary";
  size?: "medium";
  btnType?: "icon" | "button";
};

const button = cva("", {
  variants: {
    intent: {
      primary:
        "bg-[#ff5c33] font-medium tracking-normal border border-[#9c3015] text-[#f5f5f5] leading-tight lg:py-[0.75rem] px-[1rem] rounded-lg py-[0.75rem]",
      secondary:
        "bg-[#1b1b1b] font-medium tracking-normal border border-[#414141] text-[#f5f5f5] leading-tight lg:py-[0.75rem] px-[1rem] rounded-lg py-[0.75rem]",
    },
    size: { medium: "min-w-[183px]" },
    btnType: {
      button: "",
      icon: "px-0 rounded-lg py-0",
    },
  },
  compoundVariants: [
    {
      btnType: "icon",
      className: "h-10 w-10",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
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
