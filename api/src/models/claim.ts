import pool from "../utils/database";
const create: any = async (
  person_id: string,
  body_claim: string,
  type_id: string
) => {
  try {
    const resultDataBase = await pool.query(
      `INSERT INTO app.claim
      ( person_id, body_claim, openingdate, endingdate, type_id)
      VALUES( $1, $2, NOW(), NOW(), $3) RETURNING *;`,
      [person_id, body_claim, type_id]
    );

    return {
      success: true,
      data: resultDataBase.rows[0] || null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

const deleteClaim: any = async (id: string) => {
  try {
    const result = "respuestas";

    return {
      success: true,
      data: id || null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

const update: any = async (id: string) => {
  try {
    const result = "respuestas";

    return {
      success: true,
      data: id || null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};
const getById: any = async (id: string) => {
  try {
    const result = "respuestas";

    return {
      success: true,
      data: id || null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};
const getAll: any = async () => {
  try {
    const result = "respuestas";

    return {
      success: true,
      data: null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};
export { create, deleteClaim, update, getById, getAll };
