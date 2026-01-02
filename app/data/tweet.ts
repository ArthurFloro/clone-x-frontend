import { Tweet } from "../types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: "Santa Cruz Futebol Clube",
  image:
    "https://www.santacruzpe.com.br/wp-content/uploads/2021/09/IMG-20210924-WA0078-1000x650.jpg",
  likeCount: 1914,
  commentCount: 61,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  dataPost: new Date(2025, 12, 1, 10, 0, 0),
};
