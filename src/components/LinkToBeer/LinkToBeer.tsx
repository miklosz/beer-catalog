import { Beer } from "@prisma/client";
import Link from "next/link";
import StatusIcon from "../StatusIcon/StatusIcon";
import { normalizeString } from "@/utils";

const LinkToBeer = ({ beer }: { beer: Partial<Beer>; }) => {
  const { symbol, name, styleName, statusId } = beer;

  if (!symbol || !name) { 
    return null;
  }

  return (
    <Link
      className="link-to-beer"
      href={`/b/${normalizeString(symbol)}`}>
      <span className="symbol">{symbol}</span>{name}
      {styleName && <i>{styleName}</i>}
      {statusId && <StatusIcon statusId={statusId} />}
    </Link>
  );
};

export default LinkToBeer;
