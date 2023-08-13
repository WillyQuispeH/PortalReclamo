import createLogger from "../utils/logger";
import { v2 as cloudinary } from "cloudinary";
import config from "../utils/config";

cloudinary.config({
  cloud_name: config.cloudinary_name || "dzfg8xnxn",
  api_key: config.cloudinary_api_key || "734242724172826",
  api_secret: config.cloudinary_secret || "1_K4cx2TRHcbd3URjmuHJ_oJU-Y",
});

const add = async (req: any, res: any) => {
  try {
    const files = req.files;
    const results: Array<any> = [];
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const result = await cloudinary.uploader.upload(file.path);
        results.push(result);
      }
    }
    createLogger.info({
      model: "file/add",
      data: req.body,
    });

    res.status(200).json({ success: true, data: results, error: null });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ success: false, data: null, error: e as Error });
  }
};

export { add };
