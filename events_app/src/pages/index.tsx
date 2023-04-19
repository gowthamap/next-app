import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

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
      <header>
        <nav>
          <Link href="/" passHref>
            Home
          </Link>

          <Link href="/events" passHref>
            Events
          </Link>
          <Link href="/about-us" passHref>
            About Us
          </Link>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {data.map((ev: any) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image src={ev.image} alt={ev.title} width={200} height={100} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}

        <a href="/events/london">
          <h2>Events in London</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </a>
        <a href="/events/sanfran">
          <h2>Events in Sanfrancisco</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </a>
        <a href="/events/barcelona">
          <h2>Events in Barcelona</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </a>
      </main>

      <footer>
        <p>@ 2022 Time to code - A Project</p>
      </footer>
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
