import htmlRenderer from "/htmlRenderer.js";
import eventManager from "/eventManager.js"
console.log('product.js');

const productId = expressParams.id;
console.log(productId);

async function renderProduct() {
  try {
    const response = await fetch(`/api/product/${productId}`)
    const { status, title, message, data, error } = await response.json();
    htmlRenderer.renderProductInfo(data);
    eventManager.addProductEvents(data);
  }
  catch (error) {
    console.log(`error when render product: ${error}`);
  }
}

renderProduct();