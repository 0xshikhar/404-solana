/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import { sql } from '@vercel/postgres';

export async function query(sqlQuery: string, params: any[] = []) {
  try {
    const result = await sql.query(sqlQuery, params);
    return result.rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export async function run(sqlQuery: string, params: any[] = []) {
  try {
    return await sql.query(sqlQuery, params);
  } catch (error) {
    console.error('Database run error:', error);
    throw error;
  }
}
