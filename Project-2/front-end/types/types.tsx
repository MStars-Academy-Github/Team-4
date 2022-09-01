import { Dispatch, SetStateAction } from "react";

export interface LoginProps {
  setChecker: Dispatch<SetStateAction<boolean>>;
}
export interface MainProps {
  setChecker: Dispatch<SetStateAction<boolean>>;
}
export interface RegisterProps {
  setComp: Dispatch<SetStateAction<boolean>>;
}
