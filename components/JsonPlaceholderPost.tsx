import { JsonPlaceholderUser } from "@/types/jsonPlaceholder";

interface JsonPlaceholderUserCardProps {
  user: JsonPlaceholderUser;
}

export default function JsonPlaceholderUserCard({ user }: JsonPlaceholderUserCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 shadow-sm shadow-[#091b20]/30">
      <div className="mb-3 flex items-center justify-between gap-3 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white/55">
        <span>User #{user.id}</span>
        <span>{user.username}</span>
      </div>

      <h3 className="mb-3 text-lg font-semibold leading-snug text-white">{user.name}</h3>

      <div className="space-y-2 text-sm leading-6 text-white/70">
        <p>
          <span className="font-medium text-white/90">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium text-white/90">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-medium text-white/90">Website:</span> {user.website}
        </p>
        <p>
          <span className="font-medium text-white/90">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          <span className="font-medium text-white/90">Geo:</span> {user.address.geo.lat}, {user.address.geo.lng}
        </p>
        <p>
          <span className="font-medium text-white/90">Company:</span> {user.company.name}
        </p>
        <p>
          <span className="font-medium text-white/90">Catchphrase:</span> {user.company.catchPhrase}
        </p>
      </div>
    </article>
  );
}
