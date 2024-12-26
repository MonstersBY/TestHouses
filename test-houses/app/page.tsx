import React from "react";
import CreateMap from "./_components/map/CreateMap";
import { Request } from "./_components/request/Request";

export default function Home() {
  
  return (
    <main>
      <CreateMap/>
      <Request/>
    </main>
  );
}
