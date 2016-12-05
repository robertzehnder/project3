angular.module("cars", ["ngResource", "ui.router"])
  .controller("indexController", ["$state", "Car", indexControllerFunction])
  .config(["$stateProvider", Router])
  .factory("Car", ["$resource", Callback])


function indexControllerFunction($state, Car) {
  console.log("Hi I work");
  this.cars = Car.query()
  this.cars.$promise.then((data)=>{
    console.log(data)
  })
  console.log(this.cars)
}

// function indexControllerFunction($state, Post){
//   this.posts = Post.query()
//   this.newPost = new Post()
//   this.create = function(){
//     this.newPost.$save().then((post) => {
//       $state.go("show", { _id: post._id})
//     })
//   }
// }

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
