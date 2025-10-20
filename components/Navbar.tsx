import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-semibold text-orange-500">
            Orenjiwa Happi
          </span>
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