const { response } = require('express');
const ex = require('express');

const router = ex.Router();

router.get("/getdetails", (req,res)=>{

    res.send( {"name":'Manjeet','email':'manjeet260190@gmail.com'});
})



module.exports = router;