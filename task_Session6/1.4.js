class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;

  constructor(id, firstName, lastName, salary) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#salary = salary;
  }

  getID() {
    return this.#id;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(s) {
    this.#salary = s;
  }

  getAnnualSalary() {
    return 12 * this.#salary;
  }

  raiseSalary(percent) {
    return (this.#salary += (this.#salary / 100) * percent);
  }

  toString() {
    return `This Employee have ID equal ${this.getID()}, Name equal ${this.getName()} and Salary equal ${this.getSalary()}`;
  }
}

const employee = new Employee(1000214120, "karim ", "Ghanem", 8000);

console.log(employee);

console.log(employee.getID());
console.log(employee.getFirstName());
console.log(employee.getLastName());
console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAnnualSalary());
console.log(employee.raiseSalary(20));

// To String
console.log(employee.toString());
