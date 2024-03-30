const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    console.log('Product ID:', productId);

    // Function to fetch product details based on id
    async function fetchDetails(id) {
      try {
        const response = await fetch(`https://dummyjson-fetch.onrender.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    async function updateProduct() {
      const productContainer = document.getElementById('productContainer');

      // Fetch product details using id
      const product = await fetchDetails(productId);
      console.log('Product Details:', product);

      productContainer.innerHTML = `
        <img src="${product.images[0]}" alt="Product image">
        <h1>${product.title}</h1>
        <h3>Description: ${product.description}</h3>
        <h2>Discount Percentage: ${product.discountPercentage} %</h2>
        <h5>Stock: ${product.stock}</h5>
        <h4>Brand: ${product.brand}</h4>
        <p>Price: $${product.price}</p><br>
        <button>Buy Now</button>
      `;
    }

    updateProduct();