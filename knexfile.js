import "dotenv/config";

export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/portfolio__rm.db",
  },
  useNullAsDefault: true,
};
