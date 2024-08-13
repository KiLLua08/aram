import React from 'react';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/dashboard/leaderboard">
          <div className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-md shadow-sm text-orange-400">
            <h2 className="text-xl font-bold">Leaderboard</h2>
            <p>View the current rankings</p>
          </div>
        </Link>
        <Link href="/dashboard/profile">
          <div className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-md shadow-sm text-orange-400">
            <h2 className="text-xl font-bold">Profile</h2>
            <p>View and edit your profile</p>
          </div>
        </Link>
        <Link href="/dashboard/matches">
          <div className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-md shadow-sm text-orange-400">
            <h2 className="text-xl font-bold">Matches</h2>
            <p>View and report your match results</p>
          </div>
        </Link>
        <Link href="/dashboard/register">
          <div className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-md shadow-sm text-orange-400">
            <h2 className="text-xl font-bold">Register</h2>
            <p>Register for a new tournament</p>
          </div>
        </Link>
        <Link href="/dashboard/stats">
          <div className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-md shadow-sm text-orange-400">
            <h2 className="text-xl font-bold">Stats</h2>
            <p>See your stats and improve</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;