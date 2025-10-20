export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-center">
      <img
        src="/logo.png"
        alt="Orenjiwa Happi Logo"
        className="w-48 h-48 mb-6 animate-bounce-slow"
      />
      <h1 className="text-5xl font-extrabold text-orange-500 drop-shadow-sm mb-4">
        Welcome to Orenjiwa Happi
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        We are a passionate comic publisher dedicated to bringing imaginative stories, vibrant artwork, and heartfelt characters from talented creators to readers around the world. Dive into the worlds we craft — one panel at a time.
      </p>
      <div className="space-x-4">
        <a
          href="/team"
          className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-orange-50 transition"
        >
          Meet Our Team
        </a>
      </div>
    </main>
  );
}