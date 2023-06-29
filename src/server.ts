import express, { Request, Response } from "express";
import mustache from "mustache-express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const server = express();

//template engine
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("engine", mustache());

//access paste public
server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.get("/", (req: Request, res: Response) => {
   res.send("Home");
});

server.use((req: Request, res: Response) => {
   res.status(404).send("Página não encontrada!");
});

server.listen(process.env.PORT);
