import { User } from "./user";

export class Posts{
  id:number;
  title:string;
  category:string;
  description:string;
  language:string;
  progLanguage:string;
  user:User;
  userId:number;
}
