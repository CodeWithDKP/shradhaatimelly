"use client";
import Sidebar from "@/components/layout/Sidebar";
import TopNavbar from "@/components/layout/TopNavbar";
import DashboardPage from "@/components/superadmin/dashboard/page";
import { SUPERADMIN_SIDEBAR_ITEMS } from "@/constants/superadmin/sidebar";
import {  useEffect, useState } from "react";

export default function SuperAdminLayout() {
    const [stats, setStats] = useState({
        totalSchools: 0,
        totalStudents: 0, 
      });
      const [schools, setSchools] = useState([]);
      const [transactions, setTransactions] = useState([]);
    
      useEffect(() => {
        fetch("/api/superadmin/dashboard")
          .then((r) => r.json())
          .then((r) => setStats(r.data));
    
        fetch("/api/superadmin/schools?limit=4")
          .then((r) => r.json())
          .then((r) => setSchools(r.data));
    
        fetch("/api/superadmin/transactions")
          .then((r) => r.json())
          .then((r) => setTransactions(r.data.slice(0, 8)));
      }, []);
  return (
    <div className="flex">
         <Sidebar menuItems={SUPERADMIN_SIDEBAR_ITEMS} />
         <div className="flex-1">
           <TopNavbar />
            <DashboardPage stats={stats} schools={schools} transactions={transactions} />
         </div>
       </div>
  );
}
