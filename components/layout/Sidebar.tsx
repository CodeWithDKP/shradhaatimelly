"use client";

import { MAIN_COLOR } from "@/constants/colors";
import { IMenuItem } from "@/interfaces/dashboard";
import { useRouter, useSearchParams } from "next/navigation";
import BrandLogo from "../ui/common/BrandLogo";

export default function Sidebar({ menuItems }: { menuItems: IMenuItem[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "dashboard";

  return (
    // <aside className="w-64 bg-white">
    //   {menuItems.map((item) => {
    //     const itemTab = new URLSearchParams(item.href.split("?")[1]).get("tab") || "dashboard";
    //     const isActive = itemTab === activeTab;
    //     const iconElement=item.icon;
    //     return (
    //       <button
    //         key={item.href}
    //         onClick={() => router.push(item.href)}
    //         style={isActive ? styles.activeTab : undefined}
    //         className={`w-full text-left px-4 py-3 flex transition ${!isActive ? "hover:bg-gray-100 rounded-lg cursor-pointer" : ""}`}
    //       >
    //         {iconElement}
    //         {item.label}
    //       </button>
    //     );
    //   })}
    // </aside>
    <aside className="w-64 bg-white px-3 py-4">
  {menuItems.map((item) => {
    const itemTab = new URLSearchParams(item.href.split("?")[1]).get("tab") || "dashboard";
    const isActive = itemTab === activeTab;
    const Icon = item.icon;
    return (
      <button
        key={item.href}
        onClick={() => router.push(item.href)}
        style={isActive ? styles.activeTab : undefined}
        className={`
          w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-xl
          text-sm font-medium transition
          ${
            isActive
              ? "bg-green-500 text-white shadow-md"
              : "text-gray-500 hover:bg-gray-100"
          }
        `}
      >
        {/* Icon */}
        <Icon
          className={`text-lg ${
            isActive ? "text-white" : "text-gray-400"
          }`}
        />

        {/* Label */}
        <span>{item.label}</span>
      </button>
    );
  })}
</aside>


  );
}

const styles={
  activeTab:{
    backgroundColor: `${MAIN_COLOR}`,
    color: `white`,
    fontWeight: `600`,
    borderRadius: `10px`,
  } ,
}
