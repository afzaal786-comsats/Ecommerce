// Products Schema 

module.exports=(sequelize,DataTypes)=>{
    let Products = sequelize.define('Products',{
        productName : DataTypes.STRING,
        unit	: DataTypes.STRING,
        price	: DataTypes.STRING,
    });


    Products.associate = function(models){
        Products.hasMany(models.Categories,{
            foreignKey : 'categoryID',
            as : 'categoryID'
        });
    }
    return Products;
}