import Image from "next/image";

const EventsCatPage = ({ data }) => {
  return (
    <div>
      <h1>Events in London</h1>
      <div>
        {data.map((ev) => {
          return (
            <a key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
              Event 1
              <Image src={ev.image} alt={ev.title} width={200} height={100} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");

  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);

  return { props: { data } };
}