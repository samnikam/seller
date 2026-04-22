import Sidebar from "./Sidebar";
import DashboardTopNav from "./DashboardTopNav";

interface NavItem {
  label: string;
  icon: string;
  href: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  role: string;
  department: string;
  ctaLabel?: string;
}

export default function DashboardLayout({
  children,
  navItems,
  role,
  department,
  ctaLabel,
}: DashboardLayoutProps) {
  return (
    <div className="bg-surface min-h-screen">
      <Sidebar navItems={navItems} ctaLabel={ctaLabel} />
      <main className="ml-64 min-h-screen flex flex-col">
        <DashboardTopNav role={role} department={department} />
        <div className="p-8 flex-1">{children}</div>
      </main>
    </div>
  );
}
