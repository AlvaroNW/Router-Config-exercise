import { Router } from "express";
import { getUsers } from "../Controllers/userController.js"

const userRoutes = Router();


userRoutes.route('/').get(getUsers)

export default userRoutes;