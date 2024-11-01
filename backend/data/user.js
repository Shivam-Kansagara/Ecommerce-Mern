import bcrypt from "bcryptjs";

export const users = [
  {
    name: "admin user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "shivam kansagara",
    email: "shivam@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "random user",
    email: "random@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
