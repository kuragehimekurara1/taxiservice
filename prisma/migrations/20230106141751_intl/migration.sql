/*
  Warnings:

  - You are about to drop the column `SubscriberID` on the `Subscribers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subscriberID]` on the table `Subscribers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Subscribers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriberID` to the `Subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subscribers_SubscriberID_key";

-- AlterTable
ALTER TABLE "Subscribers" DROP COLUMN "SubscriberID",
ADD COLUMN     "name" VARCHAR(50) NOT NULL,
ADD COLUMN     "phoneNumber" VARCHAR(30),
ADD COLUMN     "subscriberID" VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subscribers_subscriberID_key" ON "Subscribers"("subscriberID");
