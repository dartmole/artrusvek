export type TCategory = 'news' | 'plays' | 'actors';
export type TCategoryElement = NewsPostType | ActorType | PlayType;
export type TCategoryElements = NewsPostType[] | ActorType[] | PlayType[];

export interface NewsPostType {
  briefInfo?: string;
  date: string;
  id: string;
  name: string;
  published?: string;
  slug: string;
  source: string;
  tag: string;
  thumbnail: string;
  uid: string;
  type?: 'news';
}

export interface Socials {
  fbLink: string;
  igLink: string;
  vkLink: string;
  link: string;
}

export interface ActorType {
  thumbnail: string;
  birthday: string;
  description: string;
  education: string;
  id: string;
  name: string;
  playedIn: string[];
  role: string;
  slug: string;
  sortId: number;
  uid: string;
  socials: Socials;
  type?: 'actors';
}

export interface PlayType {
  actors: string[];
  briefInfo: string;
  description: string;
  genre: string;
  id: string;
  igLink: string;
  length: string;
  name: string;
  photos: string[];
  rating: string;
  slug: string;
  sortId: string;
  thumbnail: string;
  uid: string;
  youtubeLink: string;
  type?: 'plays';
}
