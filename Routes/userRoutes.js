import { Router } from "express";
import { getUsers, getUser, createUser } from "../Controllers/userController.js"

const userRoutes = Router();


userRoutes.route('/').get(getUsers)
userRoutes.route('/:id').get(getUser)
userRoutes.route('/new').post(createUser) 


export default userRoutes;