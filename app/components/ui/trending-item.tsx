import Link from "next/link";

type Props = {
  label: string;
  count: number;
};

export const TrendingItem = ({ label, count }: Props) => {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(label)}`}
      className="group/item"
    >
      <div className="group-hover/item:underline font-bold">{label}</div>
      <div className="text-sm text-gray-400">{count} posts</div>
    </Link>
  );
};
