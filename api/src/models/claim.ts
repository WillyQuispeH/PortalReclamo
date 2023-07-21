import pool from "../utils/database";
const create: any = async (id: string) => {
  try {
    const result = "respuestas";

    const resultDataBase = await pool.query(
      "select * from app.claim where id = $1",
      [id]
    );
    return {
      success: true,
      data: resultDataBase || null,
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
