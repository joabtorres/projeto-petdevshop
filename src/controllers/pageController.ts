import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { PetModel } from "../models/pets";

export function home(req: Request, res: Response) {
   res.render("pages/page", {
      animals: PetModel.getAll(),
      menu: createMenuObject("all"),
      banner: {
         title: "Todos os animais",
         background: "allanimals.jpg",
      },
   });
}

export function dogs(req: Request, res: Response) {
   res.render("pages/page", {
      animals: PetModel.getFromAnimal("dog"),
      menu: createMenuObject("dog"),
      banner: {
         title: "Todos os cachorros",
         background: "banner_dog.jpg",
      },
   });
}
export function cats(req: Request, res: Response) {
   res.render("pages/page", {
      animals: PetModel.getFromAnimal("cat"),
      menu: createMenuObject("cat"),
      banner: {
         title: "Todos os gatos",
         background: "banner_cat.jpg",
      },
   });
}
export function fishes(req: Request, res: Response) {
   res.render("pages/page", {
      animals: PetModel.getFromAnimal("fish"),
      menu: createMenuObject("fish"),
      banner: {
         title: "Todos os peixes",
         background: "banner_fish.jpg",
      },
   });
}

export function search(req: Request, res: Response) {
   let query = req.query.q as string;
      if(!query){
         res.redirect("/")
         return;
      }
   res.render("pages/page", {
      search: query,
      animals: PetModel.getFromName(query),
      menu: createMenuObject(""),
   });
}
