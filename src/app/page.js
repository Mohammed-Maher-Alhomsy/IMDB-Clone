import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB clone website",
};

export default function Home() {
  return <main className="text-red-500">Hello</main>;
}
