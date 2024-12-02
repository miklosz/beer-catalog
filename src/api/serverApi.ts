import prisma from "@/lib/prisma";

export const getBeerData = async (symbol: string) => {
  const beer = await prisma.beer.findUnique({
    where: { symbol },
    include: {
      style: {
        select: { name: true }, // Include only the style name
      },
    },
  });

  return beer;
};

export const getSimilarBeers = async (id: number) => {
  // stub, to be implemented
  const similarBeers = await prisma.beer.findMany(
    {
      where: {
        id: {
          not: id,
        },
      },
    }
  );
  return similarBeers;
}

