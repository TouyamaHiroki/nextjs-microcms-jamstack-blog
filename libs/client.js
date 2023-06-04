import {createClient} from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "next-js-jamstack",
  apiKey: process.env.API_KEY,
});