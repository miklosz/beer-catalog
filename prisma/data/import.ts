// Example import script from old database with basic mapping. Needs fine tuning.
// Status and style mapping needs to be fixed to follow the actual data.

import { PrismaClient } from '@prisma/client';
import beers from './source.json'; // just some selected beers from the old database

const prisma = new PrismaClient();

const getStyleIds = async () => { 
  const styles = await prisma.style.findMany();
  return styles.map(style => style.id);
}

async function importData() {
  const avaliableStyles = await getStyleIds();

  for (const beer of beers) {
    console.log("Importing beer: ", beer.number);

    const styleId = avaliableStyles.includes(Number(beer.StyleId)) ? Number(beer.StyleId) : 0;

    await prisma.beer.create({
      data: {
      symbol: beer.number,
      order: Number(beer.ordinal),
      name: beer.name,
      style: { connect: { id: styleId } },
      description: beer.description || null,
      brewedAt: beer.brewedAt && !isNaN(Date.parse(beer.brewedAt)) ? new Date(beer.brewedAt) : null,
      bottledAt: beer.bottledAt && !isNaN(Date.parse(beer.bottledAt)) ? new Date(beer.bottledAt) : null,
      og: beer.ogsg || null,
      fg: beer.fgsg || null,
      abv: Number(beer.abv) || null,
      srm: 0,
      ibu: 0,
      status: { connect: { id: beer.status === 'in-stock' ? 1 : 2 } },
      visible: beer.deleted === "0",
      createdAt: new Date(beer.createdAt),
      updatedAt: new Date(beer.updatedAt),
      },
    });
  }

  console.log('Data imported successfully.');
}

importData()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());


