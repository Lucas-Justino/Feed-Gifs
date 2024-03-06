import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

function GifGrid({ gifs }) {
  return (
    <Grid data={gifs}>
      <GridColumn field="title" title="Título" filterable={true} headerClassName="center-text" />
      <GridColumn field="username" title="Usuário" headerClassName="center-text" filterable={true} />
      <GridColumn
        title="Imagem"
        width="200px"
        headerClassName="center-text"
        cell={(props) => (
          <td>
            <img
              src={props.dataItem.images.original.url}
              alt={props.dataItem.title}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </td>
        )}
      />
    </Grid>
  );
}

export default GifGrid;
