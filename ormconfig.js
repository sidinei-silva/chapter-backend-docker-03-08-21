const path = require("path")
const rootDir = process.env.NODE_ENV === "development" ?
  "src" :
  "dist"

module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [rootDir +'/models/*{.ts,.js}'],
    migrations: [rootDir + '/migration/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migration',
    },
    synchronize: false
};
