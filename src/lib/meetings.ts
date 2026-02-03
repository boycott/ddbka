import { getCollection } from "astro:content";

function startOfToday() {
  const now = new Date();

  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

export const getUpcoming = async (limit?: number) => {
  const allMeetings = await getCollection("meetings");
  const today = startOfToday();

  const upcomingMeetings = allMeetings
    .filter((meeting) => meeting.data.date >= today)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());

  return upcomingMeetings.slice(0, limit);
};

export const getPast = async (limit?: number) => {
  const allMeetings = await getCollection("meetings");
  const today = startOfToday();

  const pastMeetings = allMeetings
    .filter((meeting) => meeting.data.date < today)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return pastMeetings.slice(0, limit);
};