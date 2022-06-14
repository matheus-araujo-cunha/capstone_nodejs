interface IRentCreate {
  reserveId: string;
}

interface IRentToUpdate {
  startDate?: Date;
  finishDate?: Date;
}

export { IRentCreate, IRentToUpdate };
