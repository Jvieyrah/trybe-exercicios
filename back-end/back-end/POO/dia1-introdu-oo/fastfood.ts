class Customer {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

    getCustomerName(): string {
        return this._name;
    }

    setCustomerName(name: string): void {
        this._name = name;
    }
}

class Order {
    private _client: Customer;
    private _items: Item[] = [];
    private _paymentMethod: string;
    private _discount = 0;

    constructor(
        customer: Customer, 
        items: Item[], 
        paymentMethod: string, 
        discount: number,
      ) {
        this._client = customer;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._discount = discount;
      }

      getCustomer(): Customer {
        return this._client;
    }

    setCustomer(customer: Customer): void {
        this._client = customer;
    }

    getItems(): Item[] {
        return this._items;
    }

    setItems(items: Item[]): void {
        this._items = items;
    }

    getPaymentMethod(): string {
        return this._paymentMethod;
    }

    setPaymentMethod(paymentMethod: string): void {
        this._paymentMethod = paymentMethod;
    }

    getDiscount(): number {
        return this._discount;
    }

    setDiscount(discount: number): void {
        this._discount = discount;
    }
  
   

}

class Item {
    private _name: string;
     private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    getItemName(): string {
        return this._name;
    }

    getItemPrice(): number {
        return this._price;
    }

    setItemName(name: string): void {
        this._name = name;
    }

    setItemPrice(price: number): void {
        this._price = price;
    }
}