import { getCollection } from "astro:content";
import { getPastCollection, getUpcomingCollection } from "./global";

export const getUpcoming = async (limit?: number) => {
  const allMeetings = await getCollection("events");

  return getUpcomingCollection(allMeetings, limit);
};

export const getPast = async (limit?: number) => {
  const allMeetings = await getCollection("events");

  return getPastCollection(allMeetings, limit);
};
