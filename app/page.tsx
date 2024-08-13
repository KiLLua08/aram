import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto text-center text-yellow-500">
    <h1 className="text-4xl font-bold my-8">Welcome to the ARAM Ranking System</h1>
    <p className="text-lg">Track your progress and participate in tournaments!</p>
    <div className="mt-8">
      <Link href="/dashboard" className="p-4 bg-gray-700 hover:bg-gray-500 rounded-md shadow-sm text-yellow-600">
        Dashboard
      </Link>
    </div>
  </div>
  );
}
