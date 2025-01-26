// import localFont from "next/font/local";
import { Manrope, Syne } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500", "600", "800"],
  variable: "--manrope-font",
});
export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600", "800"],
  variable: "--syne-font",
});

// export const denton = localFont({
//   src: [
//     {
//       path: "./denton/Denton Thin 100.otf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./denton/Denton Light 300.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./denton/Denton Regular 400.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./denton/Denton Medium 500.otf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./denton/Denton Bold 700.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./denton/Denton ExtraBold 800.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./denton/Denton Black 900.otf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--denton-font",
// });
// export const gilroy = localFont({
//   src: [
//     {
//       path: "./gilroy/Gilroy-Regular.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./gilroy/Gilroy-Medium.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./gilroy/Gilroy-SemiBold.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./gilroy/Gilroy-Bold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./gilroy/Gilroy-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./gilroy/Gilroy-Heavy.ttf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--gilroy-font",
// });
