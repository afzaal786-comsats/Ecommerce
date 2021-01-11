const customerController = require('../controller').customer;


module.exports=(app)=>{
    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    });


    app.post('/api/customer/create',customerController.create);

}