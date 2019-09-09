const cars = ['Volvo', 'Saab', 'Tesla'];

// This is OK
cars[0] = 'Opel';

// This is OK
cars.push('Mercedes');

// This is NOT OK with const, it only works with let
cars = ['Volvo', 'Saab', 'Tesla', 'Mercedes'];

console.log(cars);
