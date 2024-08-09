export interface IUser {
  name: string;
  age: number;
}


export class User implements IUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  isChild(): boolean {
      return this.age < 18;
  }

  getUserInfo(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const exampleUser = new User("A", 10);
console.log(exampleUser.getUserInfo()); 
console.log(`Is child: ${exampleUser.isChild()}`);