import express, { Request, Response } from "express";
import mustache from "mustache-express";
import path from "path";
import dotenv from "dotenv";
import mainRouter from "./routes/index";

dotenv.config();

const server = express();

//template engine
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

//access paste public
server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(mainRouter);

server.use((req: Request, res: Response) => {
   res.status(404).render("pages/404");
});

server.listen(process.env.PORT);
