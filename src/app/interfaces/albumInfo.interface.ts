import { Artist } from "./albums.interface";

export interface albumInfo{
  artists: Artist[];
  url:string;
  dimension: [number,number];
  name: string;
  releaseDate: Date;
  uri: string;
  id?: string;
  type?: string;
  external_url?:string;
  popularity?: number;
}