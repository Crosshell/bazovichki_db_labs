import express from 'express';
import {
  registerUser,
  listUsers,
  getUser,
  updateUser,
  removeUser,
} from './userController.js';

const userRouter = new express.Router();

userRouter.post('/user', registerUser);
userRouter.get('/user', listUsers);
userRouter.get('/user/:id', getUser);
userRouter.patch('/user/:id', updateUser);
userRouter.delete('/user/:id', removeUser);

export default userRouter;
