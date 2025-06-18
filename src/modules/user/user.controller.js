import { Router } from "express";
import * as userService from "./user.service.js";

const router = Router();

router.post("/", userService.createUser);
router.get("/:id", userService.findUser);
router.get("/", userService.findAllUsers);
router.patch("/:id", userService.updateUser);
router.delete("/:id", userService.deleteUser);

export default router;
