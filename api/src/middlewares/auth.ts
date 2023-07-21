import config from "../utils/config";
const auth = (req: any, res: any, next: any) => {
  
  if (req.headers.id !== config.apiKey) {
    res.status(401).json({ message: "Acceso no autorizado" });
    return;
  }
  return next();
};

export { auth };
