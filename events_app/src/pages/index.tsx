import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Events App</title>
      </Head>
      <header>
        <nav>
          <img />
          <a href="/">Events</a>
          <a href="/events">Home</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div><h2>Events in London</h2></div>
      </main>

      <footer>
        <p>@ 2022 Time to code - A Project</p>
      </footer>
    </div>
  );
}
