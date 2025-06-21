"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { cn } from "@/lib/utils";
const SwitchWithBackground = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-6">
      <Switch
        className="h-10 w-24 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `${
            checked
              ? "url(/images/all-img/switch-bg-2.png)"
              : "url(/images/all-img/switch-bg-1.png)"
          }`,
        }}
        thumbClass="h-9 w-9  data-[state=unchecked]:ltr:ml-1 data-[state=unchecked]:rtl:mr-1 data-[state=checked]:ltr:ml-14 data-[state=checked]:rtl:mr-14 dark:bg-default-900"
        onCheckedChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default SwitchWithBackground;
