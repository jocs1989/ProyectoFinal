import { Router } from 'express';
import multer from 'multer';
import passport from 'passport';

import {
  endSession,
  newSession,
  startSession,
} from '../controller/logout.controller.js';
import {
  newUser,
  registrarUsuario,
} from '../controller/user.controller.js';
import { configPassport } from '../middleware/loggin/passport.js';
import { validateUserLogin } from '../middleware/schemas/schema.user.js';

const upload = multer({ dest: 'file/' });
configPassport(passport);

const router = Router();
router.get("/", registrarUsuario);
router.post("/",upload.single('file'), newUser);
router.get("/login", startSession);
router.post(
  "/login",
  validateUserLogin(),
  passport.authenticate("local", {
    failureRedirect: "/api/user/login",
  }),
  newSession
);
router.get("/logout", endSession);

export default router;
