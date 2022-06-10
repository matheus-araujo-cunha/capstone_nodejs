interface IRent {
  value: number;
  startDate: Date;
  finishDate: Date;
  itemId: string;
}

interface IRentToUpdate {
  startDate?: Date;
  finishDate?: Date;
}

export { IRent, IRentToUpdate };
