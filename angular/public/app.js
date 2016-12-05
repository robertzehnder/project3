angular.module("cars", ["ngResource"])
  .controller("indexController", ["$state", "Car", indexControllerFunction])
  .config(["$stateProvider", Router])

function indexControllerFunction($state, Car) {
  console.log("Hi I work");
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

function Router($stateProvider) {
  .state("index", {
    url: "/cars",
    templateUrl: "index.html",
    controller: "indexController",
    controllerAs: "vm"
  })
}
