import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of products
router.get("/", async (req, res) => {
  let collection = await db.collection("products");
  let results = await collection.find({})
    .limit(48)
    .toArray();

  res.send(results).status(200);
});

// Get a single product
router.get("/:id", async (req, res) => {
    let collection = await db.collection("products");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

export default router;