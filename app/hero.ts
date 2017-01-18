export class Hero {
  id: number;
  name: string;
  unique?: string;
  points: number;
  options?: [{
    name: string;
    points: number;
  }];
  imageUrl: string;
}