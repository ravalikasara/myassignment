const chocolates = [
    {
      id: 1,
      name: 'Dark Chocolate Bar',
      price: 100,
      imageUrl: 'https://img.freepik.com/free-photo/top-view-delicious-chocolate-tablet-with-foil_23-2149349250.jpg',
    },
    {
      id: 2,
      name: 'Milk Chocolate Truffles',
      price: 80,
      imageUrl: 'https://img.freepik.com/free-photo/white-chocolate-tablet_1187-2469.jpg',
    },
    {
      id: 3,
      name: 'White Chocolate Almond Bark',
      price: 75,
      imageUrl: 'https://img.freepik.com/free-photo/view-delicious-chocolate-with-nuts-arrangement_23-2149349252.jpg',
    },
    {
      id: 4,
      name: 'Hazelnut Praline Chocolate',
      price: 200,
      imageUrl: 'https://img.freepik.com/premium-photo/chocolate-with-nuts-close-up-white_183352-2189.jpg',
    },
    {
      id: 5,
      name: 'Caramel Filled Chocolate Squares',
      price: 10,
      imageUrl: 'https://img.freepik.com/premium-photo/caramel-candy-caramel-topping-isolated-white-backgrounds_183352-3165.jpg',
    },
    {
      id: 6,
      name: 'Raspberry Dark Chocolate',
      price: 120,
      imageUrl: 'https://img.freepik.com/premium-photo/strawberry-daiquiri-truffles-white-background_198639-11834.jpg',
    },
    {
      id: 7,
      name: 'Orange Zest Chocolate Bar',
      price: 4.29,
      imageUrl: 'https://img.freepik.com/premium-photo/chocolate-orange-nuts-black-background_392895-249756.jpg',
    },
    {
      id: 8,
      name: 'Sea Salt Caramel Chocolate',
      price: 20,
      imageUrl: 'https://img.freepik.com/free-photo/top-view-brown-sugar-cubes-granulated-sugar-background_141793-8924.jpg',
    },
    {
      id: 9,
      name: 'Peanut Butter Cup',
      price: 116,
      imageUrl: 'https://img.freepik.com/free-photo/homemade-peanut-butter-with-peanuts-grey-concrete-table-top-view_114579-7068.jpg',
    },
    {
      id: 10,
      name: 'Coconut Milk Chocolate',
      price: 49,
      imageUrl: 'https://img.freepik.com/free-photo/raw-homemade-vegan-chocolate-coconut-dessert-healthy-vegan-food-concept_114579-10290.jpg',
    },
  ];
  
const cart={
   totalPrice:0,
   totalChocolates:0,
   limit:8,
   addedItems:[]
  }

let container=document.getElementById("bg-container")
let card = document.getElementById("card");
let price = document.getElementById("price")
let totalItems=document.getElementById('total-items')
let warning=document.getElementById("warning")
price.textContent=`Total Price: ${cart.totalPrice}`
totalItems.textContent=`Total Items: ${cart.totalChocolates}`
chocolates.map((each) => {
  // Create a list item for each chocolate
  let listItem = document.createElement('li');
  listItem.className="items"

  // Create an image element
  let image = document.createElement('img');
  image.src = each.imageUrl;
  image.alt = each.name;
  let para=document.createElement('p');
  para.textContent=each.name;
  para.className="name"
  let button =document.createElement('button');
  button.textContent="Buy Now"
  button.className="button"
  button.id=each.id;
  button.onclick=()=>onAdd(each.id)


image.className="image"
  // Append the image to the list item
  listItem.appendChild(image);
  listItem.appendChild(para);
  listItem.appendChild(button);



  // Append the list item to the unordered list
  card.appendChild(listItem);
});

const onAdd=(id)=>{
    console.log(cart.limit,cart.totalChocolates)
   if(cart.limit<=cart.totalChocolates){
warning.textContent = "You can only add 8 items!";
  
 
   }
   else{
    const productDetails=chocolates.filter((each)=>each.id===id)
   cart.totalPrice+=productDetails[0].price

   cart.totalChocolates+=1;
   price.textContent=`Total Price: ${cart.totalPrice}`
totalItems.textContent=`Total Items: ${cart.totalChocolates}`
   
  }

  }