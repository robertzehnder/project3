# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Car.destroy_all
Photo.destroy_all

car1 = Car.create(make: "Honda", model: "Accord")
car2 = Car.create(make: "Ferrari", model: "Testarossa")
car3 = Car.create(make: "Toyota", model: "Camry")
car4 = Car.create(make: "Volkswagon", model: "Vanagon")
car5 = Car.create(make: "Porsche", model: "911")

photo1 = Photo.create(photoUrl: "http://2-photos.ebizautos.com/used-1993-honda-accord-5drwagonlxautomatic-6173-14523276-6-640.jpg", year: 1993, color: "red", car_id: 1)
photo1 = Photo.create(photoUrl: "http://www.sportscarmarket.com/wp-content/uploads/2014/10/077ca92a29a7e2c5712fec82a0771bc1.jpg", year: 1987, color: "red", car_id: 2)
photo1 = Photo.create(photoUrl: "https://invimg.autofunds.com/InventoryImages/2016/06/14/1988_859471_17182443_1223714022016.jpg", year: 1998, color: "cream", car_id: 3)
photo1 = Photo.create(photoUrl: "http://13252-presscdn-0-94.pagely.netdna-cdn.com/wp-content/uploads/2009/06/1987_Volkswagen_VW_Vanagon_Subaru_WRX_Engine_For_Sale_Front_1.jpg", year: 1987, color: "blue", car_id: 4)
photo1 = Photo.create(photoUrl: "http://usedporsche911.net/wp-content/uploads/2013/04/Porsche-911-sc.jpg", year: 2013, color: "black", car_id: 5)
photo1 = Photo.create(photoUrl: "http://images.autotrader.com/scaler/620/420/cms/images/cars/used/honda/accord/109252/109254.jpg", year: 2010, color: "gold", car_id: 1)
photo1 = Photo.create(photoUrl: " https://img-new.cgtrader.com/items/251522/6be2fbbd38/ferrari-testarossa-retrowave-style-3d-model-obj-fbx-blend-mtl.png", year: 1985, color: "purple", car_id: 2)
photo1 = Photo.create(photoUrl: "http://images.carandbike.com/car-images/colors/toyota/camry/toyota-camry-dark-brown-mica-metallic.jpg?v=14", year: 2008, color: "brown", car_id: 3)
photo1 = Photo.create(photoUrl: "
http://dasmotoclub.com/wp-content/uploads/2014/02/1987_VW_Vanagon_Westfalia_0001.jpg", year: 1987, color: "white", car_id: 4)
photo1 = Photo.create(photoUrl: "http://blog.caranddriver.com/wp-content/uploads/2012/05/2012-Porsche-911-Club-Coupe-01-626x382.jpg", year: 2012, color: "black", car_id: 5)
