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
  Move: string;
  Fight: string;
  Shoot: string;
  Strength: string;
  Defense: string;
  Attacks: string;
  Wounds: string;
  Courage: string;
  Might?: string;
  Will?: string;
  Fate?: string;
  imageUrl: string;
}