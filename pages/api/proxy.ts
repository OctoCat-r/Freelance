import { NextApiRequest, NextApiResponse } from "next";
import ky from "ky";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Make request from the backend to the external API
    const response = await ky.get(process.env.NEXT_PUBLIC_ELEVAN_LAB_URL!, {
      headers: {
        "xi-api-key": process.env.NEXT_PUBLIC_API_KEY!,
      },
    });

    const data = await response.json();

    // Send only necessary data to the frontend
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
