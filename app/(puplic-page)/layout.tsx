"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="mx-auto flex h-screen max-w-screen-2xl items-center justify-center p-4 md:p-6 2xl:p-10">
      {children}
    </div>
  );
}
