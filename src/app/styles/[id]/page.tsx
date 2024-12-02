import { getBeerByStyle, getStyleById } from "@/api/serverApi";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import { notFound } from "next/navigation";

const StylesPage = async ({ params }: { params: Promise<{ id: number; }>; }) => {
  const id = (await params).id;
  const style = await getStyleById(Number(id));
  const beers = await getBeerByStyle(Number(id));

  if (!style) {
    return notFound();
  }

  return (
    <div>
      <h1>{style.name}</h1>
      <p>{style.description}</p>

      {beers &&
        <div>
          <h2>W tym stylu:</h2>
          {beers.map((beer) => (
            <div key={beer.id}>
              <LinkToBeer beer={beer} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default StylesPage;
