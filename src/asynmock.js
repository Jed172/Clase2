
const products = [
    {
        id: '1',
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://tecnotiendadigital.com/wp-content/uploads/iphone-12-600x600.jpg',
        stock: 25,
        description:'descripcion iphone 12'
},
    {id:'2', name: 'samsung s21', price:800, category:'celular',img: 'https://tecnotiendadigital.com/wp-content/uploads/iphone-12-600x600.jpg'},
    {id:'2', name: 'samsungs21', price:1300, category:'celular',img: 'https://tecnotiendadigital.com/wp-content/uploads/iphone-12-600x600.jpg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getItem = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
