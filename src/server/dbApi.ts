'use server';

import prisma from "@/lib/prisma";
import { normalizeString } from "@/utils";

export const getAllBeers = async () => {
  // add filter and sort (status)
  const beers = await prisma.beer.findMany();
  return beers;
};

export const findBeers = async (query: string) => {
  if (!query) return [];
  const normalizedQuery = normalizeString(query)

  return await prisma.beer.findMany({
    where: {
      OR: [
        { name: { contains: normalizedQuery } },
        { symbol: { contains: normalizedQuery } },
        { style: { name: { contains: normalizedQuery } } },
      ],
    },
    select: { id: true, name: true, symbol: true, style: { select: { name: true } } }, 
    orderBy: { order: 'asc' },
  });
}

export const getSimilarBeers = async (id: number) => {
  // stub, to be implemented
  const currentBeer = await prisma.beer.findUnique({ where: { id }});
  const similarBeers = await prisma.beer.findMany({
    where: {
      styleId: currentBeer?.styleId,
      NOT: { id },
    },
      take: 5,
    });
  return similarBeers;
};

export const getBeerBySymbol = async (symbol: string) => {
  const beer = await prisma.beer.findUnique({
    where: {
      symbol: symbol,
    },
    include: {
      style: {
        select: { name: true },
      },
    },
  });

  return beer;
};

export const getBeerByStyle = async (styleId: number) => {
  const beers = await prisma.beer.findMany({
    where: {
      styleId,
    },
  });
  return beers;
};

export const getAllStyles = async () => {
  const styles = await prisma.style.findMany();
  return styles;
};

export const getStyleById = async (id: number) => {
  const style = await prisma.style.findUnique({
    where: { id },
  });
  return style;
};

