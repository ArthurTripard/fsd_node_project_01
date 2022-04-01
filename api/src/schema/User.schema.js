import ajvInstance from "./ajv-instance";

const registerSchema = {
  type: "object",
  properties: {
    username: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
  required: ["username", "email", "password"],
  additionalProperties: false,
};

const loginSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

export const validateRegister = ajvInstance.compile(registerSchema);
export const validateLogin = ajvInstance.compile(loginSchema);
