const express = require('express');

const app = express();
const PORT = 3002
const cors =require('cors');
//const { default: knex } = require('knex');
//const PORT = process.env.PORT || 3001;
//const knex = require('knex')(require('../../knexfile.js')[process.env.NODE_ENV||'development']);
const knex = require('knex')( require('../knexfile')[process.env.NODE_ENV || 'development'])

app.use(express.json());
app.use(cors());


//________________________________________________________________________________________________
// Get movie data functionality

app.get ('/', (req, res) => {
   //res.status(200).json("hello");
   knex('movie_title').select()
   .then(data => {
      console.log(data)
      res.status(200).json(data)
   })
  
      .catch(err => {
         res.status(500).json({ message: 'An error occurred while fetching movies' });
     });

})
//__________________________________________________________________________________________________
//  Add new Record Functionality

app.post('/addmovie', (req, res) => {
   console.log('in post')
   // knex.raw('insert into movie_title(title) values(?)', ['new Movie 2'])
   // res.status(201).json('Title added successfully by raw method')
   knex('movie_title').insert({title: "Hello Dolly"})
   res.status(201).json('Title added successfully by knex method')

});
   // .select('title')
   // .where('title', title)
   // .then((data) => {
   //    console.log(data)
   //     if (data.length > 0){
   //         res.status(404).json({userCreated: false, message: `Movie ${title} already exisit in database!`});
   //     }else{
   //         knex('movie_title')
   //         .insert({title})
   //         .then(() => res.status(201).json({userCreated: true, message: 'Title added successfully'}))
   //     }
   
   // .catch((err) =>
   //     res.status(500).json({
   //     message: 'An error occurred during post',
   //     error: err,
   //     })
   // )



//________________________________________________________________________________________________________
// Update Record Functionality

// app.post('/login/', (req, res) => {
//    const { user, pw} = req.body;
//    //console.log('req.body: ',req.body)
//    //console.log('user password:', user, pw)
//    knex('user_account')
//    .select('id' , 'firstname', 'lastname')
//    .where('username', user)
//    .where('password', pw)
//    .then((data) => {
//        if (data.length === 0) {
//        return res.status(404).json({
//            message: 'User name and/or passowrd are incorrect',
//        });
//        }
//        res.status(200).json(data);
//    })
//    .catch((err) =>
//        res.status(500).json({
//        message: 'An error occurred while fetching the login',
//        error: err,
//        })
//    );

// });

//_________________________________________________________________________________________________________________
//Delete Functionality

// delete('/set/:routineId', function(req, res) {
//    const routineId = req.params.routineId;
//    knex('set')
//        .where('routine_id', routineId)
//        .del()
//        .then((rowCount) => {
//            if (rowCount === 0) {
//            return res.status(404).json({
//                message: 'Sets not found',
//            });
//            }
//            res.status(200).json({
//            message: 'Sets deleted successfully',
//            });
//        })
//        .catch((err) =>
//            res.status(500).json({
//            message: 'An error occurred while deleting the Sets',
//            error: err,app.
//            })
//        );
//    });

app.listen(PORT, () => console.log(`API server listening on port ${PORT}`))
