import db from '../config/db.js';

export const createProfile = async (userData) => {
  const { first_name, last_name, email, password } = userData;
  const query = `INSERT INTO Profile (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)`;
  return await db.query(query, [first_name, last_name, email, password]);
};

export const fetchAllProfiles = async () => {
  const query = `SELECT * FROM Profile`;
  const result = await db.query(query);
  return result.rows;
};

export const findUserById = async (id) => {
  const query = `SELECT * FROM Profile WHERE id = $1`;
  const result = await db.query(query, [id]);
  return result.rows[0];
};

export const updateProfileById = async (id, userData) => {
  const fields = Object.keys(userData);
  const values = Object.values(userData);

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(', ');

  const query = `
        UPDATE Profile
        SET ${setClause}
        WHERE id = $${fields.length + 1}
    RETURNING *;
  `;

  const result = await db.query(query, [...values, id]);
  return result.rows[0];
};

export const deleteProfileById = async (id) => {
  const query = `DELETE FROM profile WHERE id = $1`;
  await db.query(query, [id]);
};

export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM Profile WHERE email = $1`;
  const result = await db.query(query, [email]);
  return result.rows[0];
};
