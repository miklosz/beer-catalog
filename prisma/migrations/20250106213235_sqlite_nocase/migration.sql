-- Migration: Add case-insensitivity to the "symbol" and "name" columns in the "Beer" table.

-- Create a temporary table with the same schema but with case-insensitivity applied
CREATE TABLE "Beer_temp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "symbol" TEXT NOT NULL COLLATE NOCASE,
    "order" INTEGER NOT NULL,
    "name" TEXT NOT NULL COLLATE NOCASE,
    "description" TEXT,
    "recipe" TEXT,
    "brewedAt" DATETIME,
    "bottledAt" DATETIME,
    "og" DECIMAL,
    "fg" DECIMAL,
    "abv" REAL,
    "srm" INTEGER,
    "ibu" INTEGER,
    "prize" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "styleId" INTEGER NOT NULL DEFAULT 0,
    "styleName" TEXT NOT NULL DEFAULT '',
    "statusId" INTEGER NOT NULL,
    CONSTRAINT "Beer_styleId_styleName_fkey" FOREIGN KEY ("styleId", "styleName") REFERENCES "Style" ("id", "name") ON DELETE SET DEFAULT ON UPDATE CASCADE,
    CONSTRAINT "Beer_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Copy all data from the original table to the temporary table
INSERT INTO "Beer_temp" SELECT * FROM "Beer";

-- Drop the original table
DROP TABLE "Beer";

-- Rename the temporary table to the original table name
ALTER TABLE "Beer_temp" RENAME TO "Beer";

-- CreateIndex
CREATE UNIQUE INDEX "Beer_symbol_key" ON "Beer"("symbol" COLLATE NOCASE);
CREATE UNIQUE INDEX "Beer_order_key" ON "Beer"("order" COLLATE NOCASE);
