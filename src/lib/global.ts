export function startOfToday() {
  const now = new Date();

  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

export function getUpcomingCollection(collection: { data: { date: Date } }[], limit?: number) {
  const today = startOfToday();

  const upcoming = collection
    .filter(item => item.data.date >= today)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());

  return upcoming.slice(0, limit);
}

export function getPastCollection(collection: { data: { date: Date } }[], limit?: number) {
  const today = startOfToday();

  const past = collection
    .filter(item => item.data.date < today)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return past.slice(0, limit);
}
