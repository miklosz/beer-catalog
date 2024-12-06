import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const other = await prisma.styleType.create({
    data: { name: 'OTHER', id: 0 },
  });

  const ale = await prisma.styleType.create({
    data: { name: 'ALE' },
  });

  const lager = await prisma.styleType.create({
    data: { name: 'LAGER' },
  });

  const belgian = await prisma.styleType.create({
    data: { name: 'BELGIAN' },
  });


  // Create Styles
  const fallback = await prisma.style.create({
    data: {
      id: 0,
      name: 'Other',
      code: 'UNKNOWN',
      styleTypeId: other.id,
      description: 'Unspecified beer style.',
    },
  });

  const ipa = await prisma.style.create({
    data: {
      name: 'IPA',
      code: 'IPA',
      styleTypeId: ale.id,
      description: 'A hoppy beer style within the broader category of pale ale.',
    },
  });

  const pilsner = await prisma.style.create({
    data: {
      name: 'Pilsner',
      code: 'PILS',
      styleTypeId:  lager.id,
      description: 'A type of pale lager.',
    },
  });

  // Create Statuses
  const plan = await prisma.status.create({
    data: { name: 'PLAN' },
  });

  const production = await prisma.status.create({
    data: { name: 'PRODUCTION' },
  });

  const stock = await prisma.status.create({
    data: { name: 'STOCK' },
  });

  const gone = await prisma.status.create({
    data: { name: 'GONE' },
  });

  // Create Beers
  await prisma.beer.create({
    data: {
      symbol: 'A01',
      order: 1,
      name: 'First IPA',
      style: { connect: { id: ipa.id } },
      brewedAt: new Date(),
      status: { connect: { id: plan.id } },
      description: 'IPKA, taka zwykła. Karmelkowo - łodygowa. Goryczka średnia, ziołowa, lekko ściągająca. Wysycenie średnie.',
    },
  });

  await prisma.beer.create({
    data: {
      symbol: 'L02',
      order: 2,
      name: 'First Pilsner',
      style: { connect: { id: pilsner.id } },
      brewedAt: new Date(),
      status: { connect: { id: production.id } },
      description: 'Pilsner, taki zwykły. Słodowy, lekko chmielowy. Goryczka niska, ziołowa, lekko ściągająca. Wysycenie średnie.',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
