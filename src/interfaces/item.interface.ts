interface IItemCreate {
  model: string;
  brand: string;
  year: number;
  capacity: number;
  location: string;
  dailyPrice: number;
  service: boolean;
  image?: string;
}

export { IItemCreate };
