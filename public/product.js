import htmlRenderer from "/htmlRenderer.js";
import eventManager from "/eventManager.js"
console.log('product.js');

const productId = expressParams.id;
console.log('product id:', productId);

async function renderProduct() {
  try {
    const response = await fetch(`/api/product/${productId}`)
    const { status, title, message, data, error } = await response.json();
    htmlRenderer['/product'].renderProduct(data);
    eventManager['/product'].addProductEvents(data);
  }
  catch (error) {
    console.log(`error when render product: ${error}`);
  }
}

renderProduct();