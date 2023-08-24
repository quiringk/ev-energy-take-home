import { LatLng } from "react-native-maps";

export interface POIResponse {
  data: POI[];
}

export interface POI {
  ID: number;
  AddressInfo: {
    Title: string;
    Latitude: number;
    Longitude: number;
  };
}

export interface ChargingStation {
  id: number;
  coordinate: LatLng;
  name: string;
}
