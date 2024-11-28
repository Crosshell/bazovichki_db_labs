import db from '../config/db.js';
import AppError from '../utils/appError.js';

export const insertMediaContent = async (contentData) => {
  const query = `
    INSERT INTO MediaContent (title, description, body, content_type, profile_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [
    contentData.title,
    contentData.description,
    contentData.body,
    contentData.content_type,
    contentData.user_id,
  ];
  const result = await db.query(query, values);
  return result.rows[0];
};

export const getAllMediaContents = async () => {
  const query = `SELECT * FROM MediaContent`;
  const result = await db.query(query);
  return result.rows;
};

export const getMediaContentById = async (id) => {
  const query = `SELECT * FROM MediaContent WHERE id = $1`;
  const result = await db.query(query, [id]);
  return result.rows[0] || null;
};

export const updateMediaContentById = async (id, contentData) => {
  const fields = Object.keys(contentData);
  const values = Object.values(contentData);

  if (!fields.length) {
    throw new AppError('NoFieldsToUpdateException', 400);
  }

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(', ');
  const query = `
      UPDATE MediaContent
      SET ${setClause}
      WHERE id = $${fields.length + 1}
    RETURNING *;
  `;

  const result = await db.query(query, [...values, id]);
  return result.rows[0];
};

export const deleteMediaContentById = async (id) => {
  const query = `DELETE FROM MediaContent WHERE id = $1 RETURNING *`;
  const result = await db.query(query, [id]);
  return result.rows[0] || null;
};
