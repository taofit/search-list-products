import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({employee:{name: 'tao', age: 34}});
}
