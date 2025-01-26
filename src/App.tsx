import React from "react";
import { DashboardLayout } from "./components/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
export function App() {
  return <DashboardLayout>
      <div className="mt-[30px]">
        <div className="bg-gradient-to-r from-[#F1F3F6] via-[rgba(255,255,255,0.31)] to-[rgba(255,255,255,0.31)] shadow-[0px_10px_15px_0px_rgba(202,206,220,0.62)] border border-white rounded-[10px] p-[33px_20px_49px]">
          <Tabs defaultValue="new-tasks">
            <div className="flex m-0 p-0 border-b border-transparent">
              <TabsList className="bg-transparent p-0 h-auto space-x-[33px]">
                <TabsTrigger value="new-tasks" className="px-0 pb-[7px] data-[state=active]:border-b-[3px] data-[state=active]:border-[#00AA5D] data-[state=active]:text-[#383838] data-[state=active]:font-bold rounded-none text-[14px] text-[#838FA0] font-normal">
                  New tasks
                </TabsTrigger>
                <TabsTrigger value="to-be-claimed" className="px-0 pb-[7px] data-[state=active]:border-b-[3px] data-[state=active]:border-[#00AA5D] data-[state=active]:text-[#383838] data-[state=active]:font-bold rounded-none text-[14px] text-[#838FA0] font-normal">
                  To Be Claimed
                </TabsTrigger>
                <TabsTrigger value="claim-history" className="px-0 pb-[7px] data-[state=active]:border-b-[3px] data-[state=active]:border-[#00AA5D] data-[state=active]:text-[#383838] data-[state=active]:font-bold rounded-none text-[14px] text-[#838FA0] font-normal">
                  Claim History
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="new-tasks" className="mt-5">
              <div className="grid grid-cols-3 gap-5">
                <TaskCard amount="$3" title="Trial Fund" subtitle="Complete KYC verification" requirement="Complete KYC verification to get 3 USD trial fund." buttonText="Go to KYC" />
                {/* Add other cards */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-[30px] bg-gradient-to-r from-[#F1F3F6] via-[rgba(255,255,255,0.31)] to-[rgba(255,255,255,0.31)] shadow-[0px_10px_15px_0px_rgba(202,206,220,0.62)] border border-white rounded-[10px] p-[33px_20px_49px]">
          <Tabs defaultValue="contact">
            <div className="flex m-0 p-0">
              <TabsList className="bg-transparent p-0 h-auto space-x-[33px]">
                <TabsTrigger value="contact" className="px-0 pb-[7px] data-[state=active]:border-b-[3px] data-[state=active]:border-[#00AA5D] data-[state=active]:text-[#383838] data-[state=active]:font-bold rounded-none text-[14px] text-[#838FA0]">
                  Contact information
                </TabsTrigger>
                {/* Add other tabs */}
              </TabsList>
            </div>
            <TabsContent value="contact" className="mt-[27px]">
              <div className="grid grid-cols-4 gap-[30px]">
                <div className="space-y-1">
                  <label className="text-xs">First name</label>
                  <Input placeholder="Select" className="h-[49px] bg-[rgba(192,202,216,0.2)] border-0 rounded-[5px] px-[10px] mt-[5px]" />
                </div>
                {/* Add other fields */}
              </div>
              <div className="grid grid-cols-2 gap-[30px] mt-10">
                <Button variant="outline" className="w-full h-[49px] text-[17px] bg-gradient-to-r from-[#F1F3F6] to-white/31 shadow-[0px_10px_15px_0px_rgba(202,206,220,0.62)] border border-white transition-all duration-200">
                  Edit
                </Button>
                <Button className="w-full h-[49px] text-[17px] bg-[#00AA5D] shadow-[0px_10px_15px_0px_rgba(202,206,220,0.62)] transition-all duration-200">
                  Save
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>;
}
function TaskCard({
  amount,
  title,
  subtitle,
  requirement,
  buttonText
}: {
  amount: string;
  title: string;
  subtitle: string;
  requirement: string;
  buttonText: string;
}) {
  return <div className="bg-[rgba(234,237,242,0.5)] border border-[#D9E1EB] rounded-[5px] pb-[60px] relative">
      <div className="flex items-center p-5 border-b border-[#D9E1EB]">
        <div className="w-[49px] h-[49px] bg-gradient-to-br from-[#F1F3F6] to-white/31 flex items-center justify-center text-[#00AA5D] font-bold border border-white rounded-[5px]">
          {amount}
        </div>
        <p className="ml-3.5 font-normal">{title}</p>
      </div>
      <div className="p-5">
        <p className="font-bold text-black/80 tracking-[0.08px]">{subtitle}</p>
        <p className="text-[#838FA0] mt-4 font-normal">
          <span className="font-bold">Requirement:</span> {requirement}
        </p>
      </div>
      <div className="absolute bottom-[10px] w-full px-[10px]">
        <Button className="w-full h-[38px] text-[17px] bg-[#00AA5D] transition-all duration-200">
          {buttonText}
        </Button>
      </div>
    </div>;
}