import { Router } from "express";
import { getUsers, getUser } from "../Controllers/userController.js"

const userRoutes = Router();


userRoutes.route('/').get(getUsers)
userRoutes.route('/:id').get(getUser)

export default userRoutes;