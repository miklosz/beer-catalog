-- CreateTable
CREATE TABLE "Beer" (
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
    "statusId" INTEGER NOT NULL,
    CONSTRAINT "Beer_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style" ("id") ON DELETE SET DEFAULT ON UPDATE CASCADE,
    CONSTRAINT "Beer_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Style" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "description" TEXT,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "styleTypeId" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Style_styleTypeId_fkey" FOREIGN KEY ("styleTypeId") REFERENCES "StyleType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StyleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "caption" TEXT,
    "main" BOOLEAN NOT NULL DEFAULT false,
    "width" INTEGER,
    "height" INTEGER,
    "beerId" INTEGER NOT NULL,
    CONSTRAINT "Image_beerId_fkey" FOREIGN KEY ("beerId") REFERENCES "Beer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Beer_symbol_key" ON "Beer"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "Beer_order_key" ON "Beer"("order");

-- CreateIndex
CREATE UNIQUE INDEX "Status_value_key" ON "Status"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Style_code_key" ON "Style"("code");

-- CreateIndex
CREATE UNIQUE INDEX "StyleType_value_key" ON "StyleType"("value");
