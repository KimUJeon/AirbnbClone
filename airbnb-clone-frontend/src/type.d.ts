export interface IRoomPhotoPhoto {
  pk: string;
  file: string;
  description: string;
}

export interface IRoomList {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IRoomPhotoPhoto[];
}

export interface IRoomOwner {
  name: string;
  avatar: string;
  username: string;
}

export interface IAmenity {
  pk: number;
  name: string;
  description: string;
}

export interface IRoomDetail extends IRoomList {
  id: string;
  created_at: string;
  updated_at: string;
  rooms: number;
  toilets: number;
  description: string;
  address: string;
  pet_friendly: true;
  kind: string;
  is_owner: boolean;
  is_liked: boolean;
  category: ICateogry;
  owner: IRoomOwner;
  amenities: IAmenity[];
}

export interface IReview {
  payload: string;
  rating: number;
  user: IRoomOwner;
}

export interface IUser {
  last_login: string;
  username: string;
  email: string;
  date_joined: string;
  avatar: string;
  name: string;
  is_host: boolean;
  gender: string;
  language: string;
  currency: string;
}
export interface IUsernameLoginVariables {
  username: string;
  password: string;
}

export interface ISignup {
  email: string;
  name: string;
  username: string;
  password: string;
}

export interface IProtectedPageProps {
  children: React.ReactNode;
}

export interface ICategory {
  pk: number;
  name: string;
  kind: string;
}

export interface IForm {
  name: string;
  country: string;
  city: string;
  price: number;
  rooms: number;
  toilets: number;
  description: string;
  address: string;
  pet_friendly: boolean;
  kind: string;
  owner: boolean;
  amenities: number[];
  category: number;
}
