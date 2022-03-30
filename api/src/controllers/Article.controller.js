import ArticleModel from "../models/Article.model.js";

export const getArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await ArticleModel.findOne({ _id: id }).exec();

    res.status(200).json({ article });
  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(404).end();
    } else {
      res.status(500).end();
    }
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find().select("title category tags resume publiched modified").exec();

    res.status(200).json({ articles });
  } catch (error) {
    res.status(500).end();
  }
};

export const createArticle = async (req, res) => {
  try {
    const { body } = req;
    const newArticle = new ArticleModel({
      title: body.title,
      category: body.category,
      tags: body.tags,
      resume: body.resume,
      body: body.body,
    });

    await newArticle.save();

    res.status(200).end();
  } catch (error) {
    res.status(500).end();
  }
};
