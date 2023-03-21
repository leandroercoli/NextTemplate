// Create a route handler for a GET request for the /api/aviation endpoint. It should be typed and check for the correct query parameters.

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Validate the request method
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  return fetch(
    `https://airportsdata.p.rapidapi.com/airports?limit=100&skip=4000&sortBy=iata&sortByOrder=desc`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_URL || "",
        "X-RapidAPI-Host": "airportsdata.p.rapidapi.com",
      },
    }
  );
}
