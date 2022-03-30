import { Schema, model } from "mongoose";

const schema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  resume: { type: String, required: true },
  body: { type: String, required: true },
  publiched: { type: Date, default: Date.now },
  modified: { type: Date },
});

const Article = model("Article", schema);

export default Article;
