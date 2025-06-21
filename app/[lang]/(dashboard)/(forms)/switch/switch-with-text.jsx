"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const SwitchWithText = () => {
  const [selected, setSelected] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Switch
        className="h-8 w-[104px] bg-default-300 data-[state=checked]:bg-default-900"
        thumbClass="h-8 w-14 text-xs font-medium text-default-600 data-[state=unchecked]:bg-default-50 data-[state=checked]:bg-default-700 data-[state=checked]:text-default-100 data-[state=unchecked]:ltr:-ml-1 data-[state=unchecked]:rtl:ml-2 data-[state=checked]:ltr:translate-x-10 data-[state=checked]:rtl:-translate-x-10"
        thumbIcon={selected ? "Dark" : "Light"}
        onCheckedChange={() => setSelected(!selected)}
      />
      <Switch
        className="h-8 w-[104px] bg-default-300 data-[state=checked]:bg-default-900"
        thumbClass="h-8 w-14 text-xs font-medium text-default-600 data-[state=unchecked]:bg-default-50 data-[state=checked]:bg-default-700 data-[state=checked]:text-default-100 data-[state=unchecked]:ltr:-ml-1 data-[state=unchecked]:rtl:ml-2 data-[state=checked]:ltr:translate-x-10 data-[state=checked]:rtl:-translate-x-10"
        thumbIcon={checked ? "Day" : "Night"}
        onCheckedChange={() => setChecked(!checked)}
        defaultChecked
      />
    </div>
  );
};

export default SwitchWithText;
