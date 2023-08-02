import express from "express";
import cors from "cors";

import * as routes from "./routes";
import { reqLogger } from "./middlewares/logger";
import { auth } from "./middlewares/auth";

class App {
  public server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      cors({
        origin: ["http://localhost:4500"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type,Authorization", "Content-Type", "id"],
      })
    );
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use("/api/claim", auth, reqLogger, routes.ClaimRouter);
    this.server.use("/api/person", auth, reqLogger, routes.PersonRouter);
    this.server.use("/api/typeclaim", auth, reqLogger, routes.TypeClaimRouter);
  }
}

export default new App().server;
