import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { MapContainer } from "react-leaflet";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #dddaf354;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

// ============= ============= ============= ============= =============

export const MapStyledContainer = styled(MapContainer)`
  width: 95vw;
  height: 50vw;
  margin: 14px auto 18px auto;
  border-radius: 3px;
  max-width: 700px;
  max-height: 400px;
`;

// ============= ============= ============= ============= =============
export const Constructions = styled.h4`
  text-align: center;
  color: #3388ff;
`;
