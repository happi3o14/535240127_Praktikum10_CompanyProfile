interface MemberPageProps {
  params: { member: string };
}

export default function MemberPage({ params }: MemberPageProps) {
  const name = params.member.replace(/-/g, " ");
  return (
    <section>
      <h2 className="text-3xl font-semibold text-orange-500 capitalize">{name}</h2>
      <p className="mt-3">
        {name} is a key member of our team, contributing expertise and leadership to every project.
      </p>
    </section>
  );
}