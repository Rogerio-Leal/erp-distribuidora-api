-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('PF', 'PJ');

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type" "PersonType" NOT NULL DEFAULT 'PJ',
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "tradeName" TEXT,
    "document" TEXT NOT NULL,
    "type" "PersonType" NOT NULL DEFAULT 'PJ',
    "email" TEXT,
    "phone" TEXT,
    "contact" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_document_key" ON "customers"("document");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_document_key" ON "suppliers"("document");
