import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

export default function ListofProjects() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{ height: "80vh", width: "100%", marginTop: 100 }}>
      <DataGrid rowHeight={35} {...data} />
    </div>
  );
}
