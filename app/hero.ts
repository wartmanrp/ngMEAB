export class Hero {
  id: number;
  name: string;
  unique?: string;
  points: number;
  options?: [{
    name: string;
    points: number;
  }];
  rules?: [{
    name: string;
    explanation: string;
  }];
  wargear: string[];
  attributes: {
    Move: number;
    Fight: number;
    Shoot: number;
    Strength: number;
    Defense: number;
    Attacks: number;
    Wounds: number;
    Courage: number;
    Might?: number;
    Will?: number;
    Fate?: number;
  };
  imageUrl: string;
}