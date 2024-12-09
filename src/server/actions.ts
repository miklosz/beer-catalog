'use server';
import { normalizeString } from '@/utils';
import { redirect } from 'next/navigation'

export const goToBeer = async (formData: FormData) => { 
const symbol = formData.get('symbol');
if (symbol) {
    redirect(`/b/${normalizeString(symbol)}`);
  }
}
  