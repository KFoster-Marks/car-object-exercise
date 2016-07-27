'use strict';

var Car = function (mpg) {
  this.gallons = 0;
  this.mpg = mpg;
  this.totalMiles = 0;
  this.allTrips = [];
};

Car.prototype.gallons = function(){
  console.log(this.gallons);
  return this.gallons;
};

Car.prototype.fill = function (gallons) {
  this.gallons += gallons;
};

Car.prototype.drive = function(miles) {
  this.gallons = this.gallons - (miles/this.mpg);
  this.totalMiles += miles;
  this.allTrips.push(miles + " miles");
};

Car.prototype.odometer = function() {
  return this.totalMiles;
};

Car.prototype.trips = function() {
  return this.allTrips;
};

module.exports = Car;
