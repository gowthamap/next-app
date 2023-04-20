import Image from "next/image";
import Link from "next/link";

const HomePage = ({ data }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((ev) => (
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </a>
      <a href="/events/sanfran">
        <h2>Events in Sanfrancisco</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </a>
      <a href="/events/barcelona">
        <h2>Events in Barcelona</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </a>
    </main>
  );
};

export default HomePage;
