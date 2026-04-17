-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "PartnerType" AS ENUM ('ASBT', 'TELECOMSOFT');

-- CreateTable
CREATE TABLE "fines" (
    "id" SERIAL NOT NULL,
    "p_id" TEXT NOT NULL,
    "p_sery_number" TEXT NOT NULL,
    "p_plate_number" TEXT NOT NULL,
    "p_place" TEXT NOT NULL,
    "p_location" TEXT NOT NULL,
    "p_mib" TEXT NOT NULL,
    "p_video" TEXT NOT NULL,
    "p_plate_number_image" TEXT NOT NULL,
    "p_plate_number_and_car" TEXT NOT NULL,
    "p_date" TEXT NOT NULL,
    "p_decree_date" TEXT NOT NULL,
    "p_violation" INTEGER NOT NULL,
    "p_amount" INTEGER NOT NULL,
    "p_payed_amount" INTEGER NOT NULL,
    "p_status" INTEGER NOT NULL,
    "p_url" INTEGER NOT NULL,
    "privil" INTEGER,
    "p_system_added_date" TEXT,
    "p_invoice_number" TEXT,
    "discount_start_date" TEXT,
    "doc_id_telecom_soft" INTEGER,
    "partner_type" "PartnerType" NOT NULL,
    "request" JSONB,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5),

    CONSTRAINT "fines_pkey" PRIMARY KEY ("id")
);
