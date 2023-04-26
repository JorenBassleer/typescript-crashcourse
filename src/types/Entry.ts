import type Emoji from "./Emoji";

export default interface Entry {
  _id: number;
  body: string;
  emoji: Emoji | null;
  createdAt: Date;
  userId: number;
};
