const button = document.getElementById('button')
const productContainer = document.getElementById('productContainer')

button.addEventListener("click", (e) => {
  fetch(`https://dummyjson-fetch.onrender.com/products`)
    .then(res => res.json())
    .then(data => generateUI(data))
})


function generateUI(data) {
  const products = data.products; // array
  console.log(products)

   productContainer.innerHTML = ""; // Clear previous products
  
  products.forEach((product) => {

    //UI generate
    const div =  document.createElement('div')
    div.classList.add('child')
    
    const title = document.createElement('h1')
    title.style.textAlign = "center"
    const desc = document.createElement('h5')
    desc.style.textAlign = "center"
    const price = document.createElement('p')
    price.style.textAlign = "center"
    const image = document.createElement('img')
    const button = document.createElement('button');

    title.innerText = product.title
    desc.innerText = product.description
    price.innerText = "$" + product.price
    image.src = product.images[0]
    image.alt = "Product image"
    button.innerText = "View Details";
    button.style.backgroundColor = "rgb(133, 29, 29)"; 
    button.style.color = "white"; 

    div.appendChild(image)
    div.appendChild(title)
    div.appendChild(desc)
    div.appendChild(price)
    div.appendChild(button);

    productContainer.appendChild(div)

    button.addEventListener("click", () => {
      // Redirect to another page with product details
      window.location.href = `view.html?id=${product.id}`;
    });
  })
}

// search by id
const getByIdForm = document.getElementById('getById');
getByIdForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = e.target[0].value;

  fetch(`https://dummyjson-fetch.onrender.com/products/${formData}`)
    .then(res => res.json())
    .then(data => {
       // Clear previous product
       removePreviousProduct();
      generateUI_1(data); 
    })
    .catch(error => console.error('Error fetching product:', error));
});


function generateUI_1(product) {

  productContainer.innerHTML = "";

  // UI generation for a single product
  const div =  document.createElement('div');
  div.classList.add('child1');

  const title = document.createElement('h1');
  title.style.textAlign = "center";
  const desc = document.createElement('h5');
  desc.style.textAlign = "center";
  const price = document.createElement('p');
  price.style.textAlign = "center";
  const image = document.createElement('img');
  const button = document.createElement('button');
  button.style.backgroundColor = "rgb(133, 29, 29)"; 
  button.style.color = "white";

  title.innerText = product.title;
  desc.innerText = product.description;
  price.innerText = "$" + product.price;
  image.src = product.images[0];
  image.alt = "Product image";
  button.innerText = "View Details";

  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(price);
  div.appendChild(button);

  // Add product div above the product container
  productContainer.parentNode.insertBefore(div, productContainer);

  button.addEventListener("click", () => {
    // Redirect to another page with product details
    window.location.href = `view.html?id=${product.id}`;
  });
}

function removePreviousProduct() {
  // Remove previous product if exists
  const previousProduct = document.querySelector('.child1');
  if (previousProduct) {
    previousProduct.parentNode.removeChild(previousProduct);
  }
}
