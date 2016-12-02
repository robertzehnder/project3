angular.module("cars")
  .factory("Car", ["$resource", Callback])


function Callback($resource){
  return $resource("/cars/:id", {}, {
      update: { method: "PUT"}
  })
}
