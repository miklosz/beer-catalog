import Image from 'next/image';
import prisma from "@/lib/prisma";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import logo from '../../public/img/logo.png';

const Home = async () => {
  const list = await prisma.beer.findMany();

  return (
    <div className="home">
      <Image src={logo} alt="Logo" width={300} height={300} />
      <h1>All beers</h1>
      <p>To be replaced with a search start page</p>
      <ul>
        {list.map((beer) => (
          <li key={beer.id}>
            <LinkToBeer beer={beer} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
