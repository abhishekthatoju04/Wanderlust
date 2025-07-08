const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MongoURL = 'mongodb://127.0.0.1:27017/wanderlust';
async function main() {
    await mongoose.connect(MongoURL);
}
main()
    .then(()=>{
        console.log("conncted to db");
    })
    .catch((err)=>{
        console.log(err);
    });

const initDB = async()=>{ //this will empty the data which is already present in DB and add new data
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"68502fa29fe8bbd294558298"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();
//u can verify the data that has been added by command -> db.listings.find()