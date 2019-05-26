/*
  Abstract Factory pattern, which aims to encapsulate a group 
  of individual factories with a common goal. It separates the 
  details of implementation of a set of objects from their general usage.

  An Abstract Factory should be used where a system must be independent 
  from the way the objects it creates are generated or it needs to work with 
  multiple types of objects.
*/


var abstractVehicleFactory = (function () {
 
  // Storage for our vehicle types
  var types = {};
 
  return {
      getVehicle: function ( type, customizations ) {
          var Vehicle = types[type];
 
          return (Vehicle ? new Vehicle(customizations) : null);
      },
 
      registerVehicle: function ( type, Vehicle ) {
          var proto = Vehicle.prototype;
 
          // only register classes that fulfill the vehicle contract
          if ( proto.drive && proto.breakDown ) {
              types[type] = Vehicle;
          }
 
          return abstractVehicleFactory;
      }
  };
})();

 
abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );
 
// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );
 
// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );