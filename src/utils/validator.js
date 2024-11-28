import AppError from './appError.js';

export const validateRequiredFields = (data) => {
  const { first_name, last_name, email, password } = data;
  if (!first_name || !last_name || !email || !password) {
    throw new AppError('DataMissingException', 400);
  }
};

export const validateRequiredContentFields = (data) => {
  const { title, body, content_type, user_id } = data;

  if (!title || !body || !content_type || !user_id) {
    throw new AppError('RequiredFieldsMissingException', 400);
  }
};
