// export const SUPERADMIN_SIDEBAR_ITEMS = [
//   { label: "Dashboard", href: "/frontend/superadmin/dashboard" },
//   { label: "Add School", href: "/frontend/superadmin/dashboard?tab=addschool" },
//   { label: "Schools", href: "/frontend/superadmin/dashboard?tab=schools" },
//   { label: "Fees Transactions", href: "/frontend/superadmin/dashboard?tab=transactions" },
//   { label: "Sign Out", href: "/" },
// ];

import {
  FiHome,
  FiPlusCircle,
  FiUsers,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";

export const SUPERADMIN_SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    href: "/frontend/superadmin/dashboard",
    icon: FiHome,
  },
  {
    label: "Add School",
    href: "/frontend/superadmin/dashboard?tab=addschool",
    icon: FiPlusCircle,
  },
  {
    label: "Schools",
    href: "/frontend/superadmin/dashboard?tab=schools",
    icon: FiUsers,
  },
  {
    label: "Fees Transactions",
    href: "/frontend/superadmin/dashboard?tab=transactions",
    icon: FiCreditCard,
  },
  {
    label: "Sign Out",
    href: "/logout",
    icon: FiLogOut,
  },
];
