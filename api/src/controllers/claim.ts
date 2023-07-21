import * as ModelClaim from "../models/claim";

const create = async (req: any, res: any) => {
  try {
    const { id } = req.body;

    const result = await ModelClaim.create(id);

    res.status(200).json({ success: true, data: result, error: null });
  } catch (e) {
    res.status(200).json({ success: false, data: null, error: e });
  }
};

const getById = async (req: any, res: any) => {
  try {
    const { id } = req.body;

    const result = await ModelClaim.getById(id);

    res.status(200).json({ success: true, data: result, error: null });
  } catch (e) {
    res.status(200).json({ success: false, data: null, error: e });
  }
};

const update = async (req: any, res: any) => {
  try {
    const { id } = req.body;

    const result = await ModelClaim.update(id);

    res.status(200).json({ success: true, data: result, error: null });
  } catch (e) {
    res.status(200).json({ success: false, data: null, error: e });
  }
};

const getAll = async (req: any, res: any) => {
  try {
    const result = await ModelClaim.getAll();

    res.status(200).json({ success: true, data: result, error: null });
  } catch (e) {
    res.status(200).json({ success: false, data: null, error: e });
  }
};
const deleteClaim = async (req: any, res: any) => {
  try {
    const { id } = req.body;

    const result = await ModelClaim.deleteClaim(id);

    res.status(200).json({ success: true, data: result, error: null });
  } catch (e) {
    res.status(200).json({ success: false, data: null, error: e });
  }
};

export { create, update, getAll, getById, deleteClaim };
