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

class Data {
    private _day: number;
    private _month: number;
    private _year: number;

    constructor(day: number, month: number, year: number) {
       const dateStr = `${day}/${month}/${year}`;

       if(new Date(dateStr).getDate() !== day){
        this._day = 1;
        this._month = 1;
        this._year = 1900;
       } else {
        this._day = day;
        this._month = month;
        this._year = year;
       }

    }

    get day(): number {
        return this._day;
    }

    set day(day: number) {
        this._day = day;
    }

    get month(): number {
        return this._month;
    }

    set month(month: number) {
        this._month = month;
    }

    getMonthName(): string {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        return months[this._month - 1];
    }

    get year(): number {
        return this._year;
    }

    isLeapYear(): boolean {
        if(this._year % 4 === 0) {
            return true;
        } else {
            return false;
        }
    }

    compareDate(date: Data): number {
        const date1 = new Date(`${this._day}/${this._month}/${this._year}`);
        const date2 = new Date(`${date.day}/${date.month}/${date.year}`);

        if(date1.getTime() > date2.getTime()) {
            return 1;
        } else if(date1.getTime() < date2.getTime()) {
            return -1;
        } else {
            return 0;
        }
    }
} 

const testDate = new Data(29, 1, 1989);

console.log(testDate);