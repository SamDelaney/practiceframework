import { Request, Response } from "express";

export let allWords = (req: Request, res: Response) => {
  res.send("Returns all Words");
};

export let getWord = (req: Request, res: Response) => {
  res.send("Returns one Word");
};

export let deleteWord = (req: Request, res: Response) => {
  res.send("Returns one Word");
};

export let updateWord = (req: Request, res: Response) => {
  res.send("Returns one word");
};

export let addWord = (req: Request, res: Response) => {
  res.send("Returns one word");
};
