-- CreateTable
CREATE TABLE "Places" (
    "_id" TEXT NOT NULL,
    "address" VARCHAR(800) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Places_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "Places" ADD CONSTRAINT "Places_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
