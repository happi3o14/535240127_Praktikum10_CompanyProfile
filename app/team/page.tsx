import Link from "next/link";

const members = [
  { name: "Happy Calista", role: "Art Director" },
  { name: "Hinata Shoyo", role: "Scriptwriter" },
  { name: "Loid Forger", role: "Colorist" },
  { name: "Hashibira Inosuke", role: "Production Manager" },
  { name: "Shun Takahaka", role: "Marketing Manager" },
  { name: "Otosaka Yuu", role: "Sales Executive" },
];

export default function TeamPage() {
  return (
    <section className="flex flex-col items-center bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8 text-center text-orange-500">
        Our Team
      </h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {members.map((member) => (
          <li
            key={member.name}
            className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition duration-200 text-center"
          >
            <Link
              href={`/team/${encodeURIComponent(
                member.name.toLowerCase().replace(/ /g, "-")
              )}`}
              className="text-lg font-semibold text-orange-500 hover:underline"
            >
              {member.name}
            </Link>
            <p className="text-gray-600 mt-2">{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}