import { RESULT_VALUES } from "../constraints";

export interface IBet {
  C: string;
  N: string;
  NID: string;
  D: string;
  T: string;
  DAY: string;
  S: string;
  LN: string;
  IMF: boolean;
  OCG: Record<string, IOCGItem>;
  HEC: boolean;
}

export interface IO {
  ID: string;
  O: string;
  N: string;
  MBS: string;
  G: string;
  OD: number;
  IMF: boolean;
}

export interface IOCGItem {
  ID: string;
  N: string;
  MBS: string;
  SO: number;
  OC: Record<string, IO>;
}

export interface ISelectedBet {
  C: string;
  N: string;
  O: number;
  selected: RESULT_VALUES;
}
