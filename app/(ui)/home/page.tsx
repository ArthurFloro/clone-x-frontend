import { HomeFead } from "@/app/components/home/home-fead";
import { HomeHeader } from "@/app/components/home/home-header";
import { TweetPost } from "@/app/components/tweet/tweet-post";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <TweetPost />
      <HomeFead/>
    </div>
  );
}
