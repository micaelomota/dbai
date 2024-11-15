import { query } from "../config/db";

const listDatabases = async () => {
  const result = await query(
    "SELECT datname FROM pg_database WHERE datistemplate = false;"
  );
  return result;
};

const runQuery = async (_: string, queryString: string) => {
  const result = await query(queryString);

  return result;
};

export const guiService = {
  listDatabases,
  runQuery,
};
