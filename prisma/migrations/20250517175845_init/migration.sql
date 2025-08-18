-- CreateTable
CREATE TABLE "Facility" (
    "id" TEXT NOT NULL,
    "facilityName" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "npi" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QualityReport" (
    "facilityId" TEXT NOT NULL,
    "facilityName" TEXT NOT NULL,
    "msa" INTEGER NOT NULL,
    "msaTitle" TEXT NOT NULL,
    "hlmr" INTEGER NOT NULL,
    "hlmrPercentile" INTEGER NOT NULL,
    "hcahpsStartDate" TIMESTAMP(3) NOT NULL,
    "hcahpsEndDate" TIMESTAMP(3) NOT NULL,
    "compHipKnee" INTEGER NOT NULL,
    "compHipKneePercentile" INTEGER NOT NULL,
    "compStartDate" TIMESTAMP(3) NOT NULL,
    "compEndDate" TIMESTAMP(3) NOT NULL,
    "compFootnote" INTEGER NOT NULL,
    "proStartDate" TIMESTAMP(3) NOT NULL,
    "proEndDate" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "HcahpsHospitalSurvery" (
    "facilityId" TEXT NOT NULL,
    "facilityName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "measureId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "hcahpsAnswerPercen" TEXT NOT NULL,
    "completedSurveys" INTEGER NOT NULL,
    "responseRatePercent" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "HospitalInforamation" (
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
CREATE UNIQUE INDEX "QualityReport_facilityId_key" ON "QualityReport"("facilityId");

-- CreateIndex
CREATE UNIQUE INDEX "HcahpsHospitalSurvery_facilityId_key" ON "HcahpsHospitalSurvery"("facilityId");

-- CreateIndex
CREATE UNIQUE INDEX "HospitalInforamation_facilityId_key" ON "HospitalInforamation"("facilityId");
