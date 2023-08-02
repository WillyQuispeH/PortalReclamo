import { Router } from "express";

import * as TypeClaimController from "../controllers/typeClaim";

const TypeClaimRouter = Router();

TypeClaimRouter.post("/getAll", TypeClaimController.getAll);
export default TypeClaimRouter;
