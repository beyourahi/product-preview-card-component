import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "types";
import data from "data.json";
import NextCors from "nextjs-cors";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    // Run the cors middleware
    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
    await NextCors(req, res, {
        // Options
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        origin: "*",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    // Rest of the API logic
    res.status(200).json(data);
};

export default handler;
