import Image from 'next/image';
import prisma from "@/lib/prisma";
import LinkToBeer from "@/components/LinkToBeer/LinkToBeer";
import logo from '../../public/img/logo.png';
import Searchbox from '@/components/Searchbox/Searchbox';

const Home = async () => {
  const list = await prisma.beer.findMany();

  // TODO: Instead of listing all beers here, just riderct to list with results
  // like in picdemia

  return (
    <div className="home">
      <Image src={logo} alt="Logo" width={300} height={300} />
      <Searchbox />
     {/* add shortcuts below - link to all in stock, random beer (I am felling lucky), or any other promoted */}
    </div>
  );
};

export default Home;
