import React from "react";
import CreateMap from "./_components/map/CreateMap";
import { Request } from "./_components/request/Request";
import { Baner } from "./_components/baner/Baner";

export default function Home() {
  
  return (
    <main>
      <Baner/>
      <CreateMap/>
      <Request/>
    </main>
  );
}
