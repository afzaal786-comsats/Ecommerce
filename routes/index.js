const customerController = require('../controller/customers');


module.exports=(app)=>{
    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    });


    app.post('/api/customer/create',customerController.createCustomer);             // Create new customer
    app.get('/api/customer/findall', customerController.findAllCustomers)           // find All Customers 

}