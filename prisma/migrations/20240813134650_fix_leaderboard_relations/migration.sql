/*
  Warnings:

  - You are about to drop the `_PlayerLeaderboard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PlayerLeaderboard" DROP CONSTRAINT "_PlayerLeaderboard_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlayerLeaderboard" DROP CONSTRAINT "_PlayerLeaderboard_B_fkey";

-- DropTable
DROP TABLE "_PlayerLeaderboard";
