команды для мсиграции
"migration-run": "npm run typeorm:cli -- migration:run -d src/config/datasource.ts",
    "typeorm:migration:generate": "npm run typeorm -- migration:generate src/migrations/migration",
    "typeorm:migration:run": "npm run typeorm -- migration:run"