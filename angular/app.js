
angular.module("cars", ["ngResource", "ui.router"])
  .controller("indexController", ["$state", "Car", "Photo", indexControllerFunction])
  .controller("showController", ["$window", "$state", "$stateParams", "Car", "Photo", showControllerFunction])
  .config(["$stateProvider", Router])
  .factory("Car", ["$resource", Callback])
  .factory("Photo", ["$resource", photoFactory])


function indexControllerFunction($state, Car, Photo) {
  this.cars = Car.query()
  this.photos = Photo.query()
}

function showControllerFunction($window, $state, $stateParams, Car, Photo) {
  this.car = Car.get({id: $stateParams.id})
    this.photos = Photo.query()
    this.newPhoto = new Photo();
    // this.newPhoto.car_id = $stateParams.id
  this.create = function(){
    this.newPhoto.$save().then(function(photo){
      console.log(photo.car_id);
      $state.go("show", {id: photo.car_id})
    })
  }
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
  .state("welcome", {
    url: "/welcome",
    templateUrl: "./ng-views/welcome.html",
    controller: "indexController", //This is correct because it will use the same structure as the index page
    controllerAs: "vm"
  })
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
