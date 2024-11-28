import {
  createProfile,
  fetchAllProfiles,
  findUserById,
  updateProfileById,
  deleteProfileById,
  findUserByEmail,
} from './userModel.js';
import AppError from '../utils/appError.js';
import handleAsync from '../utils/handleAsync.js';
import { validateRequiredFields } from '../utils/validator.js';

export const registerUser = handleAsync(async (req, res) => {
  const userData = req.body;

  validateRequiredFields(userData);

  const user = await findUserByEmail(userData.email);
  if (user) {
    throw new AppError('AlreadyRegisteredException', 400);
  }

  await createProfile(userData);
  res
    .status(201)
    .json({ status: 'success', message: 'User registered successfully' });
});

export const listUsers = handleAsync(async (req, res) => {
  const users = await fetchAllProfiles();
  res.status(200).json({ status: 'success', message: users });
});

export const getUser = handleAsync(async (req, res) => {
  const { id } = req.params;
  const user = await findUserById(id);

  if (!user) {
    throw new AppError('UserNotFoundException', 404);
  }

  res.status(200).json({ status: 'success', message: user });
});

export const updateUser = handleAsync(async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  const user = await findUserById(id);

  if (!user) {
    throw new AppError('UserNotFoundException', 404);
  }

  const updatedUser = await updateProfileById(id, userData);

  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    updatedUser,
  });
});

export const removeUser = handleAsync(async (req, res) => {
  const { id } = req.params;

  const user = await findUserById(id);

  if (!user) {
    throw new AppError('UserNotFoundException', 404);
  }

  await deleteProfileById(id);

  res.status(200).json({ message: 'User deleted successfully' });
});
