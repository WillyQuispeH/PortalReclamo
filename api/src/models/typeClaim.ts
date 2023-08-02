import pool from "../utils/database";
const getAll: any = async () => {
  try {
    const result = await pool.query(
      `SELECT id, typename
      FROM app.typeclaim;
      `
    );
    return {
      success: true,
      data: result.rows || null,
      error: null,
    };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

export { getAll };
