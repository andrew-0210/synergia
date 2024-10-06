import localFont from "next/font/local";

export const bricolage = localFont({
  src: [
    {
      path: "./bricolage/BricolageGrotesque-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./bricolage/BricolageGrotesque-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./bricolage/BricolageGrotesque-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./bricolage/BricolageGrotesque-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./bricolage/BricolageGrotesque-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./bricolage/BricolageGrotesque-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--bricolage-font",
});
export const gilroy = localFont({
  src: [
    {
      path: "./gilroy/Gilroy-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./gilroy/Gilroy-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./gilroy/Gilroy-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./gilroy/Gilroy-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./gilroy/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./gilroy/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--gilroy-font",
});
