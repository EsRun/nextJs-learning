import { NextApiRequest, NextApiResponse } from "next";

export default function test(req, res) {
  res.status(200).json({
    test: {
      name: "898b",
    },
  });
}
