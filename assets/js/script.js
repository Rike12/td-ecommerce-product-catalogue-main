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






// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================