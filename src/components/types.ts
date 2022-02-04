export type Point = {
  quantity: string;
  id: string;
  addr: string;
  marker: [number, number];
  note: string;
  walk: boolean;
};

export enum Status {
  Ready,
  OnDelivery,
};
