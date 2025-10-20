import Image from "next/image";

export default function HomePage() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-orange-500">
        Welcome to Orenjiwa Happi
      </h1>
      <p className="text-lg max-w-2xl mx-auto">
        We are a passionate comic publisher bringing imaginative stories and stunning visuals from talented creators to global audiences.
      </p>
      <img
        src="/logo.png"
        alt="Logo"
        className="w-40 mx-auto rounded-full shadow-md"
      />
    </section>
  );
}