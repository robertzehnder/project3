
angular.module("cars", ["ngResource", "ui.router"])
  .controller("indexController", ["$state", "Car", "Photo", indexControllerFunction])
  .controller("showController", ["$state", "$stateParams", "Car", "Photo", showControllerFunction])
  .config(["$stateProvider", Router])
  .factory("Car", ["$resource", Callback])
  .factory("Photo", ["$resource", photoFactory])


function indexControllerFunction($state, Car, Photo) {
  console.log("Hi I work");
  this.cars = Car.query()
  this.photos = Photo.query()
  this.photos.$promise.then((data)=>{
    x = data
  })

  firstPhotos = [];
console.log("before loop");
// console.log(Object.keys(this.cars).length);
console.log(Object.values(this.cars).$state);

  for (var car = 0; car < this.cars.length; car++) {
    console.log("working");
    console.log(`loop position ${car}: ${this.cars[car]}`);
    for (var photo = 0; photo < this.photos.length; photo++) {
      if (this.cars[car] === this.photos[photo]) {
        firstPhotos.push(this.photos[photo])
        break;
      }
    }
  }

}

function showControllerFunction($state, $stateParams, Car, Photo) {
  this.car = Car.get({id: $stateParams.id})
  console.log(this.car);
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
  .state("show", {
    url: "/cars/:id",
    templateUrl: "./ng-views/show.html",
    controller: "showController",
    controllerAs: "vm"
  })
}
