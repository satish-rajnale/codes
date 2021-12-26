// The Prototype Pattern creates new objects, but rather than creating non-initialized objects it
// returns objects that are initialized with values it copied from a prototype - or
// example - object. The Prototype pattern is also referred to as the Properties pattern.

function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function () {
    var customer = new Customer();

    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;

    return customer;
  };
}

function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;

  this.say = function () {
    console.log(
      'name: ' + this.first + ' ' + this.last + ', status: ' + this.status
    );
  };
}

function run() {
  var proto = new Customer('n/a', 'n/a', 'pending');
  var prototype = new CustomerPrototype(proto);

  var customer = prototype.clone();
  customer.say();
}
