export interface WeightedOption {
  option: string;
  weight: number;
}

export interface WeightedAncestry extends WeightedOption {
  match: string[];
}
