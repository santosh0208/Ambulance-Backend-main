import { Request, Response } from "express";
import baseRepository from "../repo/baseRepo";
import { hospitalSchema } from "../model/hospital";
import common from "../common/common";

export const createHospital = async (req: Request, res: Response) => {
  try {
    const { name, mobileNo, secondaryMobileNo, emailid, status } = req.body;
    console.log("asdfgh", req.body);
    const newUser: any = await baseRepository.insert(
      "hospital",
      { name, mobileNo, secondaryMobileNo, emailid, status },
      hospitalSchema
    );
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
