import React from "react";
import { cn } from "@/lib/utils";
import { LogOut, Bell, ChevronDown, LayoutDashboard, Wallet, FileText, RefreshCw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
export function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-[270px_1110px] p-[30px] w-full bg-[#F1F3F6] text-[#383838] text-base font-normal">
      <div className="m-0 p-0">
        <a href="../index.html" className="m-0">
          <div className="h-[45px] bg-no-repeat m-0 p-0" style={{
          backgroundImage: 'url("https://leverix.extej.com/platform/images/main-logo/logo.svg")'
        }}></div>
        </a>
        <div className="flex flex-col items-center mt-[50px] shadow-[0px_10px_15px_0px_rgba(202,206,220,0.62)] m-0">
          <div className="w-[38px] h-[39px] bg-[#00AA5D] flex items-center justify-center text-white border border-white/20 rounded-[100px] m-0 p-0 text-base">
            <p className="m-0 p-0">NP</p>
          </div>
          <div className="w-[270px] mt-[-19px] rounded-[10px] px-[15px] py-[10px] h-[99px] bg-no-repeat" style={{
          backgroundImage: 'url("https://leverix.extej.com/platform/images/back-btn/back-btn.svg")'
        }}>
            {/* Language selector and profile controls here */}
          </div>
        </div>
        <div className="w-[270px] bg-[#EAEDF2] rounded-[10px] mt-[50px]">
          <nav className="border-l border-[#D9E1EB] pl-5 py-[9px]">
            <NavItem icon={<LayoutDashboard size={24} className="text-[#838FA0]/50" />} href="./index.html" label="Dashboard" />
            <NavItem icon={<Wallet size={24} className="text-[#838FA0]/50" />} href="./markets.html" label="Markets" />
            <NavItem icon={<FileText size={24} className="text-[#838FA0]/50" />} href="./loans.html" label="My Loans" />
            <NavItem icon={<RefreshCw size={24} className="text-[#838FA0]/50" />} href="./swap.html" label="Swap" />
            <NavItem icon={<Clock size={24} className="text-[#838FA0]/50" />} href="./transactions.html" label="Transactions" />
          </nav>
        </div>
        <div className="mt-[171px] w-[270px] h-[79px] bg-[#EAEDF2] flex items-center pl-[43px] rounded-[10px] cursor-pointer transition-all duration-200">
          <div className="w-[38px] h-[38px] bg-[rgba(189,195,204,0.2)] flex items-center justify-center rounded-[4px] transition-all duration-200">
            <LogOut className="h-5 w-5 text-[#838FA0]" />
          </div>
          <a href="./login.html" className="text-[14px] text-[#838FA0] ml-[15px]">
            Logout
          </a>
        </div>
      </div>
      <div className="ml-[30px] m-0 p-0">
        <div className="flex justify-between items-center m-0 p-0">
          <div className="text-[20px] font-bold m-0 p-0">
            <p className="m-0 p-0">Profile</p>
          </div>
          <div className="flex items-center">
            <div className="w-[40px] h-[20px] bg-white rounded-[50px] flex items-center border border-white bg-gradient-to-r from-[#F1F3F6] to-white/31">
              <div className="w-4 h-4 mx-[2px] bg-gradient-to-b from-[#F1F3F6] to-white rounded-[100px] border border-white flex items-center justify-center">
                <span className="text-xs">☀️</span>
              </div>
            </div>
            <div className="relative ml-[15px]">
              <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-[11px] h-[12px] bg-[#EF4C59] text-white text-[6px] font-bold flex items-center justify-center rounded-[50px]">
                  3
                </span>
              </Button>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>;
}
function NavItem({
  icon,
  href,
  label
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return <a href={href} className="flex items-center hover:text-[#00AA5D] transition-colors py-[9px] mb-[36px] last:mb-0 w-[209px]">
      <div className="w-[38px] h-[38px] flex items-center justify-center p-0 m-0">
        {icon}
      </div>
      <span className="text-[#838FA0] ml-6 font-normal text-base">{label}</span>
    </a>;
}