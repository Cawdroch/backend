const { registerUser } = require("../controllers/userController");

// Mock user model functions

jest.mock("../models/userModel", () => {
  // Mock user model
  const mockUser = {
    _id: "user-id",
    name: "John Doe",
    email: "johndoe@example.com",
  };
  return {
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(mockUser),
  };
});

// Mock JWT and bcrypt

jest.mock("jsonwebtoken", () => {
  sign: jest.fn().mockReturnValue("mock-token");
});
const bcrypt = require("bcryptjs");
bcrypt.genSalt = jest.fn().mockResolvedValue("mock-salt");
bcrypt.hash = jest.fn().mockResolvedValue("mock-hashed-password");

// Test

test("should register a new user", async () => {
  const req = {
    body: {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password",
    },
  };

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await registerUser(req, res);
  expect(res.status).toHaveBeenCalledWith(201);
});
