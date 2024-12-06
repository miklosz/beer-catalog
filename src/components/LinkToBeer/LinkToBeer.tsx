import { Beer } from "@prisma/client";
import Link from "next/link";
import StatusIcon from "../StatusIcon/StatusIcon";

const LinkToBeer = ({ beer }: { beer: Beer; }) => {
  const { symbol, name, statusId } = beer;

  return (
    <Link
      href={`/b/${symbol}`}>
      {symbol} {name} <StatusIcon statusId={statusId} />
    </Link>
  );
};

export default LinkToBeer;
