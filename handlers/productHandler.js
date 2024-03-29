
import data from '../data.json' assert { type: 'json' }
const  products = Object.entries(data)[0][1]

//Get all Products
export const getProducts = (req, res) => {
  const formattedData = JSON.stringify(data, null, 2); // Indent with 2 spaces for better readability
  res.setHeader('Content-Type', 'application/json');
  res.send(formattedData);
};

//Get each Product
export const getProductById = (req,res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id == id)
  res.json(product)
}

//Create a new Product
export const createNewProduct = (req,res) => {
   
  //need to receive the "title" of the form 
  const { title } = req.body

  let newProducts = [...products];
  newProducts.push({
    id: products.length + 1,
    title: title
  })
  res.json(newProducts[newProducts.length - 1])
}

// Update a Product
export const updateProductById = (req,res) => {
  const { id } = req.params;
  const { title } = req.body;

  //Find product with the id in the data
  let newProducts = [...products]
  res.json(newProducts)
}