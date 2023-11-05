
export default class Expense {
    constructor(name, type, amount) {
      this.id = Math.floor(Math.random() * 200);
      this.name = name;
      this.type = type;
      this.amount = amount;
      this.date = new Date().toJSON().slice(0, 10);
    }
  }