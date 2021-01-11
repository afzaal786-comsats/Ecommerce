// Customers Controller CRUD

const Customer = require("../models").customer;
module.exports = {
  async create(req, res) {
    console.log("Request in Create Cusotmer ", req.body);
    try {
      const customerCollection = await Customer.create({
        customerName: req.body.customerName,
        contactNumber: req.body.contactNumber,
        address: req.body.address,
        city: req.body.city,
        postalCode: req.body.postalCode,
        country: req.body.country,
      });
      res.status(200).send(customerCollection);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
