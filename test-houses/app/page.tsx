import React from "react";
import { Request } from "./_components/request/Request";
import { Baner } from "./_components/baner/Baner";
import { CreateMap } from "./_components/map/CreateMap";

export default function Home() {
  
  return (
    <main>
      <Baner/>
      <CreateMap/>
      <Request/>
    </main>
  );
}
