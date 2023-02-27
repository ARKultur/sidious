import React from "react";
import DashBoardNavBar from "../../component/dashboard/DashBoardNavBar";
import FooterComponent from "../../component/Footer";
import InteractiveMap from "./InteractiveMap";
import PlaceList from "../../component/dashboard/PlaceList";

export default function Dashboard()
{
  return (
    <div>
      <DashBoardNavBar/>
      <div style={{marginTop: "5rem", marginBottom: "2rem", marginLeft: "1rem", display: "flex", flexDirection: "row"}}>
        <PlaceList/>
        <InteractiveMap/>
      </div>
      <FooterComponent/>
    </div>
  )
}