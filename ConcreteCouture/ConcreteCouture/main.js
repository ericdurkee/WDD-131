function subscribeUser() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    if (email.includes("@") && email.includes(".")) {
      alert("Thanks for subscribing! Check your inbox soon.");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  }
  
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
  
  window.addEventListener("DOMContentLoaded", loadProducts);

const products = [
  {
    id: 1,
    name: 'Exclusive Street Hoodie',
    category: 'streetwear',
    price: 180,
    size: ['small', 'medium'],
    image: 'Images/product1.jpg'
  },
  {
    id: 2,
    name: 'Luxury Sneaker Collection',
    category: 'luxury',
    price: 350,
    size: ['medium', 'large'],
    image: 'Images/product2.jpg'
  },
  {
    id: 3,
    name: 'Pharell\'s Exclusive Tee',
    category: 'streetwear',
    price: 120,
    size: ['small', 'large'],
    image: 'Images/product3.jpg'
  },
  {
    id: 4,
    name: 'Vintage High Tops',
    category: 'luxury',
    price: 220,
    size: ['small', 'medium'],
    image: 'Images/product4.jpg'
  }
];

const productsContainer = document.getElementById('products-container');
const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const sizeFilters = document.querySelectorAll('input[name="size"]');

priceFilter.addEventListener('input', () => {
  priceValue.textContent = `Max: $${priceFilter.value}`;
});

function generateProductCards(filteredProducts) {
  productsContainer.innerHTML = ''; 
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Premium quality product in the latest fashion.</p>
      <p class="price">$${product.price}</p>
      <a href="product-details.html" class="cta-button">View Product</a>
    `;
    productsContainer.appendChild(productCard);
  });
}

function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const selectedMaxPrice = parseInt(priceFilter.value);
  const selectedSizes = Array.from(sizeFilters)
    .filter(input => input.checked)
    .map(input => input.value);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price <= selectedMaxPrice;
    const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => product.size.includes(size));

    return matchesCategory && matchesPrice && matchesSize;
  });

  generateProductCards(filteredProducts);
}

categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('input', filterProducts);
sizeFilters.forEach(filter => filter.addEventListener('change', filterProducts));

generateProductCards(products);

  