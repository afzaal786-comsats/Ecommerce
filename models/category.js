// Categories Schema 

module.exports=(sequelize,DataTypes)=>{
    let Categories = sequelize.define('Categories',{
        categoryName : DataTypes.STRING,
        description	: DataTypes.STRING,
    });
    return Categories;
}