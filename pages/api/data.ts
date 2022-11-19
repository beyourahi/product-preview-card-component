import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "types";
import data from "data.json";

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) =>
    res.status(200).json(data);

export default handler;
