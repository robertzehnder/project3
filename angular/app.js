
angular.module("cars", ["ngResource", "ui.router"])
  .controller("indexController", ["$state", "Car", "Photo", indexControllerFunction])
  .controller("showController", ["$state", "$stateParams", "Car", "Photo", showControllerFunction])
  .config(["$stateProvider", Router])
  .factory("Car", ["$resource", Callback])
  .factory("Photo", ["$resource", photoFactory])


function indexControllerFunction($state, Car, Photo) {
  this.cars = Car.query()
  this.photos = Photo.query()
  this.destroy = function () {
    console.log(this.car);
    this.car.$delete({id: this.car}).then(function(){
      $state.go("index")
    })
}
}

function showControllerFunction($state, $stateParams, Car, Photo) {
  this.car = Car.get({id: $stateParams.id})
    this.photos = this.car.photos
    // this.photos = this.car.photos.map((photoFromCar) => {
    //   let photo = new Photo()
    //   photo.someProp = photoFromCar.someProp
    //   photo.someProp = photoFromCar.someProp
    //   photo.someProp = photoFromCar.someProp
    //   return photo
    // })
    this.newPhoto = new Photo({car_id: $stateParams.id});
    this.create = function(){
    this.newPhoto.$save().then(function(photo){
      $state.go("show", {id: photo.car_id}, {reload: true})
    })
  }
  //   this.update = function(photo){
  //     this.photo = Photo.get({id: photo.id})
  //     this.photo.$promise.then(() => {
  //     this.photo.$update({id: photo.id}).then(function(photo){
  //     $state.go("show", { id: photo.car_id})
  //   })
  //   })
  // }
    this.update = function(photox){
      console.log(photox);
      let photoToEdit = Photo.get({id: photox.id}, function() {
        photoToEdit.$save({ id: photoToEdit.id})
      })
//{photoUrl: photox.photoUrl, year: photox.year, color: photox.color, id: photox.id}
//============================================================================
      // by writing '{ id: '@id' }' we want the id to be taken from 'id' parameter in request data, hence the '@' sign. Note that this mechanism is available for non-GET RQs only:
      // var Notes = $resource('/notes/:id', { id: '@id' });
      // var noteId = "my_note1";
      // // below we specify 'id' explicitly - has to be done for GET RQ:
      // // operations on our note are done inside callback function, just to make sure that the note is resolved:
      // var note = Notes.get({ id: noteId }, function () {
      //     // let's make some changes:
      //     note.topic = "A brand new topic here!";
      //     // save using $resource "static" action (aka "class" action). 'id' is taken from data object:
      //     Notes.save(note);
      //     // We can overwrite 'id' just like this:
      //     Notes.save({ id: "some_other_noteId" }, note);
      //     // even more changes:
      //     note.body = "Blah blah blah, new boring body is here";
      //     // this time save using instance action. Again: 'id' is taken from data object:
      //     note.$save();
      //     // changing id with instance action? there you go:
      //     note.$save({ id: "yet_another_noteId" });
      //     // Naturally, we could just:
      //     note.id = "OMG_how_many_of_those_noteIds_has_he_left";
      //     Notes.save(note);
      //     // ... and with instance action:
      //     note.id = "OK_he_wins";
      //     note.$save();
      // });

//============================================================================

      //   this.photoToEdit.$save().then(function(photoEditPromise){
      //     console.log("hit the update");
      //     $state.go("show", { id: photoEditPromise.car_id})
      // })



      // this.photo = photo
      //factory get the photo instead of the line above
    }

    this.destroy = function(photo){
      this.photo = Photo.get({id: photo.id})
      this.photo.$promise.then(() => {
        id = this.photo.car_id
        this.photo.$delete({id: photo.id}).then(function(photo){
          $state.go("show", {id: id}, {reload: true})
        })
      })
      }
      this.destroyCar = function(){
        console.log(this.car);
        this.car.$promise.then(() => {
          this.car.$delete({id: this.car.id}).then(function(){
            $state.go("index")
          })
        })
        }
}


function photoFactory($resource){
  return $resource("http://localhost:3000/photos/:id", {}, {
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
