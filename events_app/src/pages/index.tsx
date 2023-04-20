import Head from "next/head";
import HomePage from "../components/home/home-page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface getServerSideHomeProps {
  data: any;
}

export default function Home({ data }: getServerSideHomeProps) {
  return (
    <div>
      <Head>
        <title>Events app</title>
      </Head>
      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
