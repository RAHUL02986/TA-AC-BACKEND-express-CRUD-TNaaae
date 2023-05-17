var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  var list = ['ankit', 'suraj', 'parshant', 'ravi'];
  res.render('users', { list: list });
});

router.get('/new', (req, res) => {
  res.render('userForm');
  console.log(req.body);
});

router.get('/:id',(req,res)=>{
    res.render('singleUser',{ name: "Rahul", email: "kapoorrahul9011@gmail.com" });

})


router.put('/:id/edit',(req,res)=>{

})
router.delete('/:id',(req,res)=>{
    // delete the router
})
module.exports = router;
