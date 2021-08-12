let carts = document.querySelectorAll(".addCart");
let products = [
  { name: "cereza", tag: "", price: 4 },
  { name: "uva", tag: "", price: 4 },
  { name: "naranja", tag: "", price: 4 },
  { name: "piña", tag: "", price: 4 },
  { name: "Mango", tag: "", price: 4 },
  { name: "Lechuga", tag: "", price: 2 },
  { name: "Kiwi", tag: "", price: 3 },
  { name: "pepino", tag: "", price: 4 },
  { name: "champiñones", tag: "", price: 5 },
  { name: "melon", tag: "", price: 3 },
  { name: "papa", tag: "", price: 6 },
  { name: "espinaca", tag: "", price: 4 },
  { name: "tomate", tag: "", price: 4 },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    console.log("add to cart");
    cartNumbers(products[i]);
  });
}
let onLoadCartNumbers = () => {
  let productsNumbers = localStorage.getItem("cartNumbers");
  if (productsNumbers) {
    document.querySelector("small").textContent = productsNumbers;
    let count = document.querySelector("small");
    count.style.background = "#a3a847";
    count.style.color = "#ffff";
  }
};

let cartNumbers = (product) => {
  console.log(`El producto es :`, product);
  let productsNumbers = localStorage.getItem("cartNumbers");
  let count = document.querySelector("small");
  productsNumbers = parseInt(productsNumbers);

  if (productsNumbers) {
    localStorage.setItem("cartNumbers", productsNumbers + 1);
    count.textContent = productsNumbers + 1;
    count.style.background = "#a3a847";
    count.style.color = "#ffff";
  } else {
    localStorage.setItem("cartNumbers", 1);
    count.textContent = 1;
    count.style.background = "#a3a847";
    count.style.color = "#ffff";
  }
};

onLoadCartNumbers();
