/*
  Warnings:

  - You are about to drop the `HospitalInforamation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HospitalInforamation";

-- CreateTable
CREATE TABLE "HospitalInformation" (
    "facilityId" TEXT NOT NULL,
    "facilityName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "hospitalType" TEXT NOT NULL,
    "hospitalOwnership" TEXT NOT NULL,
    "hospitalOverallRating" TEXT NOT NULL,
    "hospitalOverallRatingFootnote" TEXT NOT NULL,
    "emergencyServices" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HospitalInformation_facilityId_key" ON "HospitalInformation"("facilityId");
