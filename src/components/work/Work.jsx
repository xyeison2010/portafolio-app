import React from "react";
import { WorkData } from "../../../src/data/work";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../containers/common/separator/Separator";
function Work() {
  const data = WorkData;//sobre mi
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Acerca de mi </label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
