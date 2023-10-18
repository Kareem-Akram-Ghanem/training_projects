class InvoiceItem {
  #id;
  #desc;
  #quantity ;
  #unitPrice;

  constructor(id, desc, quantity , unitPrice) {
    this.#id = id;
    this.#desc = desc;
    this.#quantity  = quantity ;
    this.#unitPrice = unitPrice;
  }

  getID() {
    return this.#id;
  }

  getDescription() {
    return this.#desc;
  }

  getQuantity() {
    return this.#quantity ;
  }

  setQuantity(quantity) {
    this.#quantity  = quantity;
  }

  getUnitPrice() {
    return this.#unitPrice;
  }

  setUnitPrice(unitPrice) {
    this.#unitPrice = unitPrice;
  }

  getTotal() {
    return this.#quantity  * this.#unitPrice;
  }

  toString() {
    return `This InvoiceItem have ID equal ${this.getID()}, Description equal ${this.getDescription()} and Total equal ${this.getTotal()}`;
  }
}

const invoiceItem = new InvoiceItem("C11", "BMW car", 1, 1000000);

console.log(invoiceItem);

console.log(invoiceItem.getID());
console.log(invoiceItem.getDescription());
console.log(invoiceItem.getQuantity());
console.log(invoiceItem.getUnitPrice());
console.log(invoiceItem.getTotal());

// To String
console.log(invoiceItem.toString());
