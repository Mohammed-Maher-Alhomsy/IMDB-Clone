import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB clone website",
};

export default function Home() {
  return <main className={"bg-red-500 font-bold"}>Hello</main>;
}
