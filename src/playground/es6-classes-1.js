class Person {
  constructor(name = 'Anonymous', age = 'undefined') {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hey, ik ben ${this.name}`
  }

  getDescription() {
    return `Hey, ik ben ${this.name} en ik ben ${this.age} jaar oud.`
  }

}


class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor) {
      return description += ` Their major is ${this.major}`;
    }
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location) {
      return greeting += ` Ik ben afkomstig van ${this.location}`
    }
  }
}

const me = new Traveler('Micha', 26, 'Hasselt');

console.log(me)
console.log(me.getGreeting())
console.log(me.getDescription())