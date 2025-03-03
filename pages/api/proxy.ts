import { NextApiRequest, NextApiResponse } from "next";
import ky from "ky";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const response = await ky.get(process.env.ELEVAN_LAB_URL!, {
      headers: {
        "xi-api-key": process.env.ELEVAN_LAB_API_KEY!,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching agents:", error);
    res.status(500).json({ message: "Failed to fetch agents" });
  }
}
