interface Member {
  name: string;
  role: string;
  image: string;
}

const members: Member[] = [
  { name: "Happy Calista", role: "Art Director", image: "/happy.jpeg" },
  { name: "Hinata Shoyo", role: "Scriptwriter", image: "/hinata.jpeg" },
  { name: "Loid Forger", role: "Colorist", image: "/loid.jpeg" },
  { name: "Hashibira Inosuke", role: "Production Manager", image: "/inosuke.jpeg" },
  { name: "Shun Takahaka", role: "Marketing Manager", image: "/shun.jpeg" },
  { name: "Otosaka Yuu", role: "Sales Executive", image: "/otosaka.jpeg" },
];

interface MemberPageProps {
  params: { member: string };
}

export default function MemberPage({ params }: MemberPageProps) {
  const formattedName = params.member
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const member = members.find(
    (m) => m.name.toLowerCase() === formattedName.toLowerCase()
  );

  if (!member) {
    return <p className="text-center mt-10 text-gray-500">Member not found.</p>;
  }

  return (
    <section className="text-center max-w-2xl mx-auto space-y-4">
      <img
        src={member.image}
        alt={member.name}
        className="w-40 h-40 mx-auto rounded-full shadow-md object-cover"
      />
      <h2 className="text-3xl font-semibold text-orange-500">{member.name}</h2>
      <p className="text-lg font-medium text-gray-700">{member.role}</p>
      <p className="mt-3 text-justify text-gray-600">
        {member.name} plays a vital role in our comic publishing team, blending creativity and professional skill to bring each story to life. From collaborating with artists and writers to ensuring every panel captures the right emotion, {member.name} helps shape the visual and narrative identity that defines Orenjiwa Happi's works.
      </p>
    </section>
  );
}