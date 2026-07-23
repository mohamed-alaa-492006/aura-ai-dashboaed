"use client";

import { Bell, Search } from "lucide-react";
import { userProfile } from "@/lib/dummyData";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-10 w-full">
      {/* Search Bar - Responsive Width */}
      <div className="relative w-40 sm:w-72 transition-all">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full relative transition-colors">
          <Bell className="w-5 h-5" />
          <span className="w-2 h-2 bg-indigo-600 rounded-full absolute top-2 right-2"></span>
        </button>

        <div className="h-6 w-[1px] bg-slate-200"></div>

        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-slate-200"
          />
          <div className="text-sm hidden sm:block">
            <p className="font-semibold text-slate-800 leading-none">{userProfile.name}</p>
            <p className="text-xs text-slate-500 mt-1">{userProfile.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}