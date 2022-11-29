export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

export interface UserMutation {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

export interface UserForm{
  name:string;
  message:string;
}

export interface Message {
  id:string;
  author:string;
  datetime:string;
  message:string;
}