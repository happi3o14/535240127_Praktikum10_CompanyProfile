export default function ContactPage() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-orange-500">Got ideas? Say hi!</h2>
        <form className="max-w-md mx-auto space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}