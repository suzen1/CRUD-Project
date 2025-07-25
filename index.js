const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./model/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
})
app.get('/create', (req, res) => {
  res.render('create'); // This renders views/create.ejs
});

app.post('/create', async (req, res) => {
  try {
    console.log(req.body); // Debug
    const { username, email, ImageUrl } = req.body;
    const createUser = await userModel.create({ username, email, ImageUrl });
    res.redirect('/read'); // Redirect to the read page after creation
  } catch (error) {
    console.error('Create Error:', error);
    res.status(500).send('Error creating user');
  }
});
app.get('/read',async(req, res)=>{
    let users = await userModel.find();
    res.render("read", { users }); // Pass users to the view
})
app.get('/delete/:id', async(req,res)=>{
let deleteUser = await userModel.findByIdAndDelete({_id: req.params.id});
    res.redirect('/read'); // Redirect to the read page after deletion

});

app.get('/Edit/:userid', async(req, res) => {
    let user = await userModel.findOne({ _id: req.params.userid });
    res.render('Edit', { user }); // Pass the user to the update view
})

app.post('/update/:userid', async (req,res)=>{
  let { username, email, ImageUrl } = req.body;
 let user = await userModel.findOneAndUpdate({_id: req.params.userid}, { username, email, ImageUrl }, { new: true });
  res.redirect('/'); // Redirect to the read page after update
})

app.listen(3000, () => {
    console.log("Server is running on port 3000 http://localhost:3000");
});