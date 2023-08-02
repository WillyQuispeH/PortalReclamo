import * as TypeClaimModels from "../models/typeClaim";
import createLogger from "../utils/logger";

const getAll = async (req: any, res: any) => {
  try {
    const result = await TypeClaimModels.getAll();

    if (!result.success) {
      createLogger.error({
        model: "TypeClaimModels/getAll",
        error: result.error,
      });
      res.status(500).json({ success: false, data: null, error: result.error });
      return;
    }

    createLogger.info({
      model: "TypeClaimModels/getAll",
      data: result.data,
    });

    res.status(200).json(result);
  } catch (e) {
    res.status(200).json({ success: false, data: null, error: e });
  }
};

export { getAll };
