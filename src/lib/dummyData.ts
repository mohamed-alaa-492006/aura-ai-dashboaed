import { LayoutDashboard, BarChart2, Users, Settings, DollarSign, ShoppingBag, TrendingUp } from "lucide-react";

export const navigationLinks = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
  { name: "Users", href: "/users", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const userProfile = {
  name: "Ahmed Hassan",
  role: "Admin",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
};

export const statsData = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
    icon: DollarSign,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 2,
    title: "Subscriptions",
    value: "+2,350",
    change: "+180.1%",
    isPositive: true,
    icon: Users,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    id: 3,
    title: "Sales",
    value: "+12,234",
    change: "+19%",
    isPositive: true,
    icon: ShoppingBag,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: 4,
    title: "Active Now",
    value: "+573",
    change: "-4.5%",
    isPositive: false,
    icon: TrendingUp,
    color: "bg-rose-50 text-rose-600",
  },
];
// بيانات الرسم البياني
export const revenueChartData = [
  { month: "Jan", revenue: 4000, profit: 2400 },
  { month: "Feb", revenue: 3000, profit: 1398 },
  { month: "Mar", revenue: 9800, profit: 2000 },
  { month: "Apr", revenue: 3908, profit: 2780 },
  { month: "May", revenue: 4800, profit: 1890 },
  { month: "Jun", revenue: 3800, profit: 2390 },
  { month: "Jul", revenue: 4300, profit: 3490 },
];

// بيانات جدول المعاملات
export const recentTransactions = [
  {
    id: "TXN-8801",
    user: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    amount: "$1,999.00",
    status: "Completed",
    date: "Jul 22, 2026",
  },
  {
    id: "TXN-8802",
    user: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    amount: "$39.00",
    status: "Pending",
    date: "Jul 21, 2026",
  },
  {
    id: "TXN-8803",
    user: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    amount: "$299.00",
    status: "Completed",
    date: "Jul 20, 2026",
  },
  {
    id: "TXN-8804",
    user: "William Kim",
    email: "will@email.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    amount: "$99.00",
    status: "Failed",
    date: "Jul 19, 2026",
  },
];
export const usersList = [
  {
    id: "USR-01",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    role: "Admin",
    status: "Active",
    joined: "Jan 12, 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "USR-02",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    role: "Member",
    status: "Active",
    joined: "Feb 20, 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "USR-03",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    role: "Owner",
    status: "Active",
    joined: "Mar 05, 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "USR-04",
    name: "William Kim",
    email: "will.kim@email.com",
    role: "Member",
    status: "Inactive",
    joined: "Apr 18, 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "USR-05",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    role: "Admin",
    status: "Active",
    joined: "May 22, 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
  },
];
// داتا المبيعات حسب التصنيف (Pie Chart)
export const categoryData = [
  { name: "Electronics", value: 400, color: "#4f46e5" },
  { name: "Clothing", value: 300, color: "#06b6d4" },
  { name: "Home & Garden", value: 300, color: "#f59e0b" },
  { name: "Books", value: 200, color: "#10b981" },
];

// داتا الزيارات اليومية (Bar Chart)
export const weeklyVisitsData = [
  { day: "Mon", visits: 2400 },
  { day: "Tue", visits: 1398 },
  { day: "Wed", visits: 9800 },
  { day: "Thu", visits: 3908 },
  { day: "Fri", visits: 4800 },
  { day: "Sat", visits: 3800 },
  { day: "Sun", visits: 4300 },
];