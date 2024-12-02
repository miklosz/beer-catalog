import { Beer } from "@prisma/client";
import Link from "next/link";

const LinkToBeer = ({ beer }: { beer: Beer; }) => {
  return (
    <Link href={`/b/${beer.symbol}`}>{beer.symbol} {beer.name}</Link>
  );
};

export default LinkToBeer;
