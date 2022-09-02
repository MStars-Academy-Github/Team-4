import { Dispatch, SetStateAction } from "react";

export interface LoginProps {
  setChecker: Dispatch<SetStateAction<boolean | undefined>>;
}
export interface MainProps {
  setChecker: Dispatch<SetStateAction<boolean | undefined>>;
}
export interface RegisterProps {
  setComp: Dispatch<SetStateAction<boolean>>;
}
export interface HeaderProps {
  setChecker: Dispatch<SetStateAction<boolean | undefined>>;
}
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  register: string;
}
export interface InfoProps {
  user: IUser | undefined;
}
