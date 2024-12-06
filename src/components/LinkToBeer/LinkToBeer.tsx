import { Beer } from "@prisma/client";
import Link from "next/link";
import StatusIcon from "../StatusIcon/StatusIcon";

const LinkToBeer = ({ beer }: { beer: Partial<Beer>; }) => {
  const { symbol, name, styleName, statusId } = beer;

  return (
    <Link
      href={`/b/${symbol}`}>
      {symbol} {name}
      {styleName && <i>{styleName}</i>}
      {statusId && <StatusIcon statusId={statusId} />}
    </Link>
  );
};

export default LinkToBeer;
