//An Abstract Factory creates objects that are related by a common theme.
// In object-oriented programming a Factory is an object that creates other objects.
// An Abstract Factory has abstracted out a theme which is shared by the newly created objects.
// This includes scenarios in which the creation process involves object caching, sharing or
// re-using of objects, complex logic, or applications that maintain object and type counts,
// and objects that interact with different resources or devices. If your application needs more
// control over the object creation process, consider using a Factory.

// JavaScript does not support class-based inheritance therefore the abstract classes as
// depicted in the diagram are not used in the JavaScript example. Abstract classes and interfaces
//  enforce consistent interfaces in derived classes. In JavaScript we must ensure this
//  consistency ourselves by making sure that each 'Concrete' object has the same interface
//  definition (i.e. properties and methods) as the others

function Employee(name) {
  this.name = name;

  this.say = function () {
    console.log('I am employee ' + name);
  };
}

function EmployeeFactory() {
  this.create = function (name) {
    return new Employee(name);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function () {
    console.log('I am vendor ' + name);
  };
}

function VendorFactory() {
  this.create = function (name) {
    return new Vendor(name);
  };
}

function run() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create('Joan DiSilva'));
  persons.push(employeeFactory.create("Tim O'Neill"));
  persons.push(vendorFactory.create('Gerald Watson'));
  persons.push(vendorFactory.create('Nicole McNight'));

  for (var i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
  }
}
