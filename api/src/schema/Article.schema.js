import ajvInstance from "./ajv-instance";

const articleSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    category: { type: "string" },
    tags: { type: "array", items: { type: "string" } },
    resume: { type: "string" },
    body: { type: "string" },
  },
  required: ["title", "category", "tags", "resume", "body"],
  additionalProperties: false,
};

export const validateArticle = ajvInstance.compile(articleSchema);
