import { TweetItem } from "@/app/components/tweet/tweet-item";
import { GeneralHeader } from "@/app/components/ui/general-header";
import { SearchInput } from "@/app/components/ui/search-input";
import { tweet } from "@/app/data/tweet";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};

export default async function Search({ searchParams }: Props) {
  const params = await searchParams;

  if (!params.q) redirect("/");

  return (
    <div>
      <GeneralHeader backHref="/">
        <SearchInput defaultValue={params.q} />
      </GeneralHeader>
      <div className="border-t-2 border-gray-900">
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
        <TweetItem tweet={tweet} />
      </div>
    </div>
  );
}
