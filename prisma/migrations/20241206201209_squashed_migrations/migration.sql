/*
  Warnings:

  - You are about to drop the column `value` on the `Status` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `StyleType` table. All the data in the column will be lost.
  - Added the required column `name` to the `Status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `StyleType` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Status" ("id") SELECT "id" FROM "Status";
DROP TABLE "Status";
ALTER TABLE "new_Status" RENAME TO "Status";
CREATE UNIQUE INDEX "Status_name_key" ON "Status"("name");
CREATE TABLE "new_StyleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_StyleType" ("id") SELECT "id" FROM "StyleType";
DROP TABLE "StyleType";
ALTER TABLE "new_StyleType" RENAME TO "StyleType";
CREATE UNIQUE INDEX "StyleType_name_key" ON "StyleType"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
