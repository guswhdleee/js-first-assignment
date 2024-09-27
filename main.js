function Product(name, price) {
  this.name = name;
  this.price = price;
}

function writeDocument(productList) {
  let resultTitle = document.getElementById("select-product");
  let resultList = document.getElementById("result-list");
  let resultPrice = document.getElementById("result-price");
  price = 0;
  resultTitle.innerText = ""; // 입력 마다 초기화
  resultList.innerHTML = "";
  resultPrice.innerText = "";
  for (i = 0; i < productList.length; i++) {
    resultTitle.innerText = "선택한 상품";
    resultList.innerHTML += `<li>${productList[i].name} - ${productList[i].price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>`; // 3자리 수마다 ,을 찍어주는 정규 표현식
    price += productList[i].price;
    resultPrice.innerText = `총 액 : ${price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
}

let products = [
  new Product("대뱃살", 3000),
  new Product("목살", 5000),
  new Product("배꼽살", 4000),
  new Product("중뱃살", 1000),
];

let product = document.getElementById("tuna");
let pay = document.getElementById("pay");
let productList = []; // option에 따라 js 생성자로 분리하는 배열
var price = 0; // 총 액

product.addEventListener("click", function (e) {
  let selctedProduct = []; // document에서 선택된 option들을 담는 배열
  productList = []; // 초기화
  let bigFat, neck, belly, middleFat;
  for (i = 0; i < product.options.length; i++) {
    // 선택된 상품들 option들의 배열을 만드는 반복문
    if (product.options[i].selected == true) {
      selctedProduct.push(product.options[i].value);
    }
  }

  for (i = 0; i < selctedProduct.length; i++) {
    // 선택 상품들과 생성자를 잇는 반복문
    if (selctedProduct[i] == "bigFat") {
      bigFat = products[0];
      productList.push(bigFat);
    } else if (selctedProduct[i] == "neck") {
      neck = products[1];
      productList.push(neck);
    } else if (selctedProduct[i] == "belly") {
      belly = products[2];
      productList.push(belly);
    } else if (selctedProduct[i] == "middleFat") {
      middleFat = products[3];
      productList.push(middleFat);
    }
  }

  writeDocument(productList);
});

pay.addEventListener("click", function (e) {
  e.preventDefault();
  if (productList.length == 0) alert("결재할 상품을 선택해야 합니다.");
  else {
    window.open(
      "./pay.html",
      "__self",
      "width=500, height=500, left=300, top=300"
    );
  }
});
