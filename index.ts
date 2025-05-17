function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  } else if (typeof toUpper == "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArr: T[] = [];

  arrays.forEach((arr) => {
    newArr = [...newArr, ...arr];
  });

  return newArr;
}

class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    // console.log(`Make: ${this.make}, Year: ${this.year}`);
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    // console.log(`Model: ${this.model}`);
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value == "string") return value.length;
  else if (typeof value == "number") return value * 2;
  else return -1;
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length == 0) return null;

  let exp_product: Product = products[0];

  products.forEach((product) => {
    if (product.price > exp_product.price) exp_product = product;
  });

  return exp_product;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day == Day.Sunday) return "Weekend";
  else if (day == Day.Saturday) return "Weekend";
  else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return await new Promise((resolve, reject) => {
    if (n > 0) {
      setTimeout(() => resolve(n * n), 1000);
    } else {
      reject("Error: Negative number not allowed");
    }
  });
}
