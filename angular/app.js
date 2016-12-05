angular.module("cars", ["ngResource", "ui.router"])
  .controller("indexController", ["$state", "Car", "Photo", indexControllerFunction])
  .config(["$stateProvider", Router])
  .factory("Car", ["$resource", Callback])
  .factory("Photo", ["$resource", photoFactory])


function indexControllerFunction($state, Car, Photo) {
  console.log("Hi I work");
  this.cars = Car.query()
  this.photos = Photo.query()
  this.cars.$promise.then((data)=>{
    console.log(data)
  })
  console.log(this.photos.$promise.then((data)=>{
    console.log(data)
  }))

}

function photoFactory($resource){
  return $resource("http://localhost:3000/photos", {}, {
      update: { method: "PUT"}
  })
}


function Callback($resource){
  return $resource("http://localhost:3000/cars/:id", {}, {
      update: { method: "PUT"}
  })
}

function Router($stateProvider) {
  $stateProvider
  .state("index", {
    url: "/cars",
    templateUrl: "./ng-views/index.html",
    controller: "indexController",
    controllerAs: "vm"
  })
}
