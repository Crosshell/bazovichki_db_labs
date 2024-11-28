import express from 'express';
import {
  createMediaContent,
  getMediaContents,
  getMediaContent,
  updateMediaContent,
  deleteMediaContent,
} from './mediaContentController.js';

const mediaContentRouter = new express.Router();

mediaContentRouter.post('/content', createMediaContent);
mediaContentRouter.get('/content', getMediaContents);
mediaContentRouter.get('/content/:id', getMediaContent);
mediaContentRouter.patch('/content/:id', updateMediaContent);
mediaContentRouter.delete('/content/:id', deleteMediaContent);

export default mediaContentRouter;
