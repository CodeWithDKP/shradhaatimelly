import { IconType } from "react-icons";

export interface IMenuItem {
  label: string;
  href: string;
  icon: IconType; // ✅ THIS IS THE KEY FIX
}
