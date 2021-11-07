import { Artist } from "./albums.interface";

export interface songInfo{
  artists: Artist[];
  url:string;
  dimension: [number,number];
  name: string;
  releaseDate: Date;
  uri: string;
}