import { getAllStyles } from "@/api/serverApi";
import Link from "next/link";

const StylesPage = async () => {
  const list = await getAllStyles();

  return (
    <div>
      <h1>All styles</h1>
      {list.map((style) =>
        <Link key={style.id} href={`styles/${style.id}`}>
          <p>{style.name}</p>
          <p>{style.description}</p>
        </Link>
      )}
    </div>
  );
};

export default StylesPage;
