// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================


//window.document.onreadystatechange = () =>{ document.getElementById('link').style.display = 'none';};
function toggleHambuger() {
  const linkMenu = document.getElementById('link');
  if(!linkMenu){
    console.log("Mobile Nav Not Found...");
    return;
  }
  if(linkMenu.style.display != 'none'){
    linkMenu.style.display = 'none';
  }else{
    linkMenu.style.display = 'block';
  }
}

// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================

const products = [
  {"img":"assets/images/products/1.jpg", "discount":"5%", "description":"Unpaired Gray Nike Running Shoe", "price":"200", "gender":"male"},
  {"img":"assets/images/products/2.jpg", "discount":"5%", "description":"White tank top", "price":"25", "gender":"male"},
  {"img":"assets/images/products/3.jpg", "discount":"5%", "description":"Yellow and black bikini", "price":"50", "gender":"male"},
  {"img":"assets/images/products/4.jpg", "discount":"5%", "description":"hite top and stunt jacket", "price":"250", "gender":"female"},
  {"img":"assets/images/products/5.jpg", "discount":"5%", "description":"Main brown leather coat", "price":"100", "gender":"babies"},
  {"img":"assets/images/products/6.jpg", "discount":"5%", "description":"Pair of white-and-orange athletic shoes on white box", "price":"90", "gender":"female"},
  {"img":"assets/images/products/7.jpg", "discount":"5%", "description":"White Nike running shoes standing", "price":"110", "gender":"male"},
  {"img":"assets/images/products/8.jpg", "discount":"5%", "description":"Assorted-color shirt lot hang on rack", "price":"500", "gender":"male"},
  {"img":"assets/images/products/9.jpg", "discount":"5%", "description":"Red and white crew neck t-shirt and white pants", "price":"90", "gender":"male"},
  {"img":"assets/images/products/10.jpg", "discount":"5%", "description":"View the photo by Mojtaba Fahiminia", "price":"240", "gender":"female"},
  {"img":"assets/images/products/11.jpg", "discount":"5%", "description":"Orange and white headdress", "price":"30", "gender":"babies"},
  {"img":"assets/images/products/12.jpg", "discount":"5%", "description":"White and blue nike air force 1 high", "price":"300", "gender":"male"},
  {"img":"assets/images/products/13.jpg", "discount":"5%", "description":"Blue jacket and a black pant", "price":"270", "gender":"male"},
  {"img":"assets/images/products/14.jpg", "discount":"5%", "description":"Black, white, and gray textiles", "price":"99", "gender":"male"},
  {"img":"assets/images/products/15.jpg", "discount":"5%", "description":"Two black top", "price":"95", "gender":"male"},
  {"img":"assets/images/products/16.jpg", "discount":"5%", "description":"White beach dress", "price":"220", "gender":"babies"},
];

window.document.onreadystatechange = () =>{
    renderProducts(products);
};

function search(query) {
  const search_result = products.map(product=>{
    //console.log(product.description.match(query), product.description);
    return product.description.match(query) || product.gender.match(query) || product.price.match(query) || product.discount.match(query) ? product : false;
  });

  renderProducts(search_result.filter(product=>product));
}

function filterGender(gender) {
  const filtered = products.filter((prod)=>{return prod.gender == gender});
  renderProducts(filtered);
}

function renderProducts(products) {
  const productDiv = document.getElementById('product_container');
    productDiv.innerHTML = '';

    products.forEach(product => {
      
      productDiv.innerHTML += (`<div class="percard catalogue">
            <a href="#">
            <img
              src="${product.img}"
              alt="Collection"
            />
            <span class="discount">-${product.discount}</span>
            <p>${product.description}</p>
            <h4><span class="price">$${product.price}</span><span class="tag">${product.gender}</span></h4>
            </a>
          </div>`);
    });
}




// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================