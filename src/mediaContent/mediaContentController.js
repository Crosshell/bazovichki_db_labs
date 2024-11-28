import handleAsync from '../utils/handleAsync.js';
import {
  deleteMediaContentById,
  getAllMediaContents,
  getMediaContentById,
  insertMediaContent,
  updateMediaContentById,
} from './mediaContentModel.js';
import { validateRequiredContentFields } from '../utils/validator.js';
import AppError from '../utils/appError.js';

export const createMediaContent = handleAsync(async (req, res) => {
  const mediaContentData = req.body;

  validateRequiredContentFields(mediaContentData);

  await insertMediaContent(mediaContentData);

  res.status(200).json({ status: 'success', message: mediaContentData });
});

export const getMediaContents = handleAsync(async (req, res) => {
  const mediaContents = await getAllMediaContents();
  res.status(200).json({ status: 'success', message: mediaContents });
});

export const getMediaContent = handleAsync(async (req, res) => {
  const { id } = req.params;
  const mediaContent = await getMediaContentById(id);

  if (!mediaContent) {
    throw new AppError('MediaContentNotFoundException', 404);
  }

  res.status(200).json({ status: 'success', message: mediaContent });
});

export const updateMediaContent = handleAsync(async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  const mediaContent = await getMediaContentById(id);

  if (!mediaContent) {
    throw new AppError('MediaContentNotFoundException', 404);
  }

  const updatedMediaContent = await updateMediaContentById(id, userData);
  res.status(200).json({ status: 'success', message: updatedMediaContent });
});

export const deleteMediaContent = handleAsync(async (req, res) => {
  const { id } = req.params;

  const deletedMediaContent = await deleteMediaContentById(id);

  if (!deletedMediaContent) {
    throw new AppError('MediaContentNotFoundException', 404);
  }

  res
    .status(200)
    .json({ status: 'success', message: 'Media Content Deleted Successfully' });
});
