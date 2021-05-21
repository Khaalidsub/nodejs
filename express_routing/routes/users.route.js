import { Router } from "express";
import { userModel } from "../models/user.model.js";
const userRouter = Router();
const numberOfUsers = 5; // number of users to create in the database
const users = []
userRouter.get("/helloWorld", (req, res) => {
  res.send("<h1>hello world</h1>");
});

userRouter.get("/populatedata", async(req, res) => {

  for (let i = 0; i < numberOfUsers; i++) {
    const user = new userModel({
      name: `user${i}`,
      email: `user${i}@gmail.com`,
    });
    // const result = await user.save()
    // users.push(result);
   
    users.push(await user.save());
  }

  res.json(users)
});

 userRouter.get("/",  async(req, res) => {
  let users = await  userModel.find({})
  res.json(users);
});


userRouter.get("/:id", async (req, res) => {
    const id = req.params?.id
    console.log(id);
    const user = await userModel.findById(id)
    // userModel.find({id: id})

  res.json({user});
});


export { userRouter };
