-- CreateTable
CREATE TABLE "User" (
    "_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "verifiedCodeDate" TIMESTAMPTZ NOT NULL,
    "verifiedCode" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "resetCodeDate" TIMESTAMPTZ,
    "lastLogin" TIMESTAMPTZ,
    "resetCode" TEXT,
    "profilePicture" TEXT NOT NULL DEFAULT '',
    "name" VARCHAR(300) NOT NULL DEFAULT '',
    "localization" TEXT NOT NULL DEFAULT 'US',
    "accountType" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Agency" (
    "_id" TEXT NOT NULL,
    "agencyName" VARCHAR(50) NOT NULL,
    "isEnable" BOOLEAN NOT NULL DEFAULT true,
    "phoneNumber1" VARCHAR(30) NOT NULL,
    "phoneNumber2" VARCHAR(30) NOT NULL,
    "mobileNumber" VARCHAR(30) NOT NULL,
    "address" VARCHAR(300) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "workingDays" INTEGER NOT NULL,
    "startOfWorkingHours" TIMESTAMPTZ NOT NULL,
    "endOfWorkingHours" TIMESTAMPTZ NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Personel" (
    "_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "position" VARCHAR(50) NOT NULL,
    "canDrive" BOOLEAN NOT NULL DEFAULT false,
    "canSeeReports" BOOLEAN NOT NULL DEFAULT false,
    "canSeeRequests" BOOLEAN NOT NULL DEFAULT false,
    "isEnable" BOOLEAN NOT NULL DEFAULT true,
    "isManager" BOOLEAN NOT NULL DEFAULT false,
    "agencyId" TEXT NOT NULL,
    "isRequest" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Personel_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Trips" (
    "_id" TEXT NOT NULL,
    "tripName" VARCHAR(50) NOT NULL,
    "tripDescription" VARCHAR(300) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "startDateTime" TIMESTAMPTZ NOT NULL,
    "endDateTime" TIMESTAMPTZ NOT NULL,
    "destination" VARCHAR(300) NOT NULL,
    "destinationLatitude" DOUBLE PRECISION NOT NULL,
    "destinationLongitude" DOUBLE PRECISION NOT NULL,
    "sourceLatitude" DOUBLE PRECISION NOT NULL,
    "sourceLongitude" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "personelId" TEXT NOT NULL,

    CONSTRAINT "Trips_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Message" (
    "_id" TEXT NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "message" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "senderId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agency_agencyName_key" ON "Agency"("agencyName");

-- AddForeignKey
ALTER TABLE "Agency" ADD CONSTRAINT "Agency_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personel" ADD CONSTRAINT "Personel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personel" ADD CONSTRAINT "Personel_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trips" ADD CONSTRAINT "Trips_personelId_fkey" FOREIGN KEY ("personelId") REFERENCES "Personel"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
