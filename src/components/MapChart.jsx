import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import styled from "styled-components";

const MapChart = () => {
  const [zoom, setZoom] = useState(1);
  const minZoom = 1;
  const maxZoom = 2;

  const handleZoomIn = () => {
    if (zoom < maxZoom) {
      setZoom(zoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoom > minZoom) {
      setZoom(zoom - 1);
    }
  };

  const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: grab;
  `;

  const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px;
    border: none;
    cursor: zoom-out;
  `;

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Button
        onClick={handleZoomIn}
        disabled={zoom === maxZoom}
        style={{ right: "75px", cursor: "zoom-in" }}
      >
        Zoom In
      </Button>
      <Button onClick={handleZoomOut} disabled={zoom === minZoom}>
        Zoom Out
      </Button>

      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [0, 0, 0],
          center: [38, 0.5],
          scale: 1000 * zoom,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup center={[36.817223, -1.286389]} zoom={zoom}>
          <Geographies
            geography="/features.json"
            fill="#2c065d"
            stroke="#FFFFFF"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>

          <Annotation
            subject={[36.817223, -1.286389]}
            dx={-90}
            dy={-30}
            connectorProps={{
              stroke: "#fff",
              strokeWidth: 2,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#fff"
            >
              {"Nairobi"}
            </text>
          </Annotation>
        </ZoomableGroup>
      </ComposableMap>
    </Container>
  );
};

export default MapChart;
