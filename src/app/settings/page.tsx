"use client";

import { useState } from "react";
import { userProfile } from "@/lib/dummyData";
import { User, Bell, Lock, Save, Camera } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState("ahmed.hassan@example.com");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your account details and system preferences.
        </p>
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-slate-200 gap-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
            activeTab === "profile"
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <User className="w-4 h-4" />
          Profile Info
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`flex items-center gap-2 pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
            activeTab === "notifications"
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Bell className="w-4 h-4" />
          Notifications
        </button>
      </div>

      {/* Profile Form Tab */}
      {activeTab === "profile" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          {/* Avatar Upload */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-slate-100 shadow-sm"
              />
              <button className="absolute bottom-0 right-0 p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow cursor-pointer">
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Profile Picture</h3>
              <p className="text-xs text-slate-400 mt-0.5">PNG, JPG or WEBP up to 2MB</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="pt-2">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors shadow-sm cursor-pointer">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Email Notifications</h3>
              <p className="text-xs text-slate-500">Receive daily digests and order updates via email.</p>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}