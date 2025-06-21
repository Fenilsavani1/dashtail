"use client";

import world from "./worldmap.json";
import { VectorMap } from "@south-paw/react-vector-maps";

const VMap = ({ height = 350 }) => {
  return (
    <div className={`w-full h-[${height}px]`}>
      <VectorMap
        {...world}
        className="size-full object-cover dashtail-codeVmapPrimary"
      />
    </div>
  );
};

export default VMap;
