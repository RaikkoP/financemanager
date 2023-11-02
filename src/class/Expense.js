
export default class Expense {
    constructor(name, type, amount) {
      this.id = Math.floor(Math.random() * 200);
      this.name = name;
      this.type = type;
      this.amount = amount;
      this.date = '10.02.2023';
    }
  }