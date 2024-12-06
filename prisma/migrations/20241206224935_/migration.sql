/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `Style` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "symbol" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
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
INSERT INTO "new_Beer" ("abv", "bottledAt", "brewedAt", "createdAt", "description", "fg", "ibu", "id", "name", "og", "order", "prize", "recipe", "srm", "statusId", "styleId", "symbol", "updatedAt", "visible") SELECT "abv", "bottledAt", "brewedAt", "createdAt", "description", "fg", "ibu", "id", "name", "og", "order", "prize", "recipe", "srm", "statusId", "styleId", "symbol", "updatedAt", "visible" FROM "Beer";
DROP TABLE "Beer";
ALTER TABLE "new_Beer" RENAME TO "Beer";
CREATE UNIQUE INDEX "Beer_symbol_key" ON "Beer"("symbol");
CREATE UNIQUE INDEX "Beer_order_key" ON "Beer"("order");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Style_id_name_key" ON "Style"("id", "name");
