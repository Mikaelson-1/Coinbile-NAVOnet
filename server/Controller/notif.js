import { inAppNotification } from "../Novu/novu.js";
import Notif from "../models/notif.js";

/*This function is to destructure property from the req.body object
 which is served as a parameter when the function is calles at the frontend*/
export const createNotif = async (req, res) => {
  const { description } = req.body;
  const newNotif = new Notif({
    description,
  });
  try {
    await newNotif.save();
    await inAppNotification(description, "Submit");
    res.status(201).json(newNotif);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
