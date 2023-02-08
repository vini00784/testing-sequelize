(async() => {

    const database = require('./db.js')
    const Product = require('./product.js')
    await database.sync()

    // const newProduct = await Product.create({
    //     nome: 'Teclado USB',
    //     preco: 30,
    //     descricao: 'Teclado bacana'
    // })
    // console.log(newProduct)

    const allProducts = await Product.findByPk(2)
    console.log(allProducts)

})()