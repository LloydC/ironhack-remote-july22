const mongoose = require('mongoose');
// Make a connection to the db
mongoose
  .connect('mongodb://localhost/catbook', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const Cat = require('./models/cat');
const Food = require('./models/food');
  // const Food = require('../models/food');
// Query the db for Wiggles
// Update the document Wiggles with Tuna's id
// Cat.findOneAndUpdate({name: 'Wiggles'}, {foods: ['62f4f7a15682d14cdfd8123e','62f4f7a15682d14cdfd81240', ]}, {new: true})
//     .then(updatedCat => console.log('update successful', updatedCat))
//     .then(()=>{
//         mongoose.connection.close(() => {
//             console.log(`Mongo connection disconnected`);
//             process.exit(0);
//           });
//     })
//     .catch(err => console.log(err));
// Add an embedded message example
// Cat.findOne({name: 'Admin'})
//   .then(cat => {
//     console.log(cat)
//     cat.message = {title: 'first title', body:'great cat'};
//     return cat.save();
//     })
//     .then(()=>{
//         console.log('Message add success!')
//     } )
//     .then(()=>{
//         mongoose.connection.close(() => {
//         console.log(`Mongo connection disconnected`);
//         process.exit(0);
//         });
//     })
//     .catch(err =>console.log(err));
// get the 
// const cat = async () =>  await Cat.findOne({name: 'Wiggles'}).populate("foods");
// const result = cat();
// console.log(result)

Cat.findOne({name: 'Wiggles'})
.populate("foods")
.then(result => console.log('result: ', result))
.then(()=>{
            mongoose.connection.close(() => {
                console.log(`Mongo connection disconnected`);
                process.exit(0);
              });
})
.catch(err => console.log(err))


// Close my connection to the db
