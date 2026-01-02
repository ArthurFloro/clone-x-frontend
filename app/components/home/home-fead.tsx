import { tweet } from "@/app/data/tweet";
import { TweetItem } from "../tweet/tweet-item";

export const HomeFead = () => {
  return (
    <div>
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
    </div>
  );
};
