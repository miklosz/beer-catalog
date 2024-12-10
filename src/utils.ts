export const normalizeString = (symbol: string | FormDataEntryValue) => symbol.toString().toLowerCase();
// TODO: Add format option
export const displayDate = (date: string | Date) => new Date(date).toLocaleDateString();
