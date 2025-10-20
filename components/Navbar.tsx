import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-orange-500">
          Orenjiwa Happi 
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/about" className="hover:text-orange-500">About</Link>
          <Link href="/team" className="hover:text-orange-500">Team</Link>
          <Link href="/contact" className="hover:text-orange-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}