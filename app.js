var MongoClient = require("mongodb").MongoClient;

//Connect to the database, "nodemogo" after the slash is the database name
var url = "mongodb://localhost:27017/nodemongo";

//Connect to the db
MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    // if (err) {
    //   throw err;
    // } else {
    //   console.log("Database created!");
    //   db.close(); //close the database
    // }

    var dbo = db.db("nodemongo");
    // var CustData = [
    //   { name: "John", address: "Highway 71" },
    //   { name: "Peter", address: "Lowstreet 4" },
    //   { name: "Amy", address: "Apple st 652" },
    //   { name: "Hannah", address: "Mountain 21" },
    //   { name: "Michael", address: "Valley 345" },
    //   { name: "Sandy", address: "Ocean blvd 2" },
    //   { name: "Betty", address: "Green Grass 1" },
    //   { name: "Richard", address: "Sky st 331" },
    //   { name: "Susan", address: "One way 98" },
    //   { name: "Vicky", address: "Yellow Garden 2" },
    //   { name: "Ben", address: "Park Lane 38" },
    //   { name: "William", address: "Central st 954" },
    //   { name: "Chuck", address: "Main Road 989" },
    //   { name: "Viola", address: "Sideway 1633" },
    // ];

    // dbo.collection("customers").insertMany(CustData, function (err, res) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("Number of documents inserted!" + res.insertedCount);
    //     db.close(); //close the database
    //   }
    // });

    //Use findOne function to filter

    // dbo.collection("customers").findOne({}, function (err, result) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log(result.name);
    //     db.close(); //close the database
    //   }
    // });

    //Use query object
    // var query = { address: "Park Lane 38" };
    // dbo
    //   .collection("customers")
    //   .find(query)
    //   .toArray(function (err, result) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       console.log(result);
    //       db.close(); //close the database
    //     }
    //   });

    //Use sort() method
    // var mysort = { name: 1 };
    // dbo
    //   .collection("customers")
    //   .find()
    //   .sort(mysort)
    //   .toArray(function (err, result) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       console.log(result);
    //       db.close(); //close the database
    //     }
    //   });

    //use deleteOne method
    // var myquery = { address: "Mountain 21" };
    // dbo.collection("customers").deleteOne(myquery, function (err, obj) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("1 document deleted");
    //     db.close(); //close the database
    //   }
    // });

    //use updateOne method
    var myquery = { address: "vallery 345" };
    var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
    dbo
      .collection("customers")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) {
          throw err;
        } else {
          console.log("1 document updated");
          db.close(); //close the database
        }
      });
  }
);
