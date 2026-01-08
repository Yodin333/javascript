let r1=require("readline-sync");
let inventory=[
    {id:1,name:"book",categories:"books",price: 500},
    {id:2,name:"copy",categories:"books",price: 300},
    {id:3,name:"bag",categories:"bags",price: 400},
    {id:4,name:"pensils",categories:"write",price: 600},
    {id:5,name:"pen",categories:"write",price: 200},
    {id:6,name:"spoon",categories:"utensils",price: 800},
];
function showinventory()
{ inventory.forEach(show=>{console.log(`ID:${show.id},NAME:${show.name},CATEGORIES:${show.categories},PRICE:RS${show.price}`)});}
function addproduct(){
    const id = inventory.length+1;
    const name=r1.question("Enter product name:");
    const categories=r1.question("Enter category:");
    const price=parseFloat(r1.question("Enter its price:"));
    inventory.push({id,name,categories,price});
    console.log("PRODUCT ADDED SUCCESSFULLY");
}
function removeproduct()
{
    const id = parseInt(r1.question("Enter product ID to remove: "));
    inventory = inventory.filter(product=>product.id!==id);;
    console.log("PRODUCT REMOVED SUCCESSFULLY!!!");
}
function filterproducts(){
    const category1=r1.question("Enter category to show:");
    const price=parseFloat(r1.question("Enter maximum price up to:"));
   const nope=inventory.filter((ok)=>ok.categories.toLowerCase()===category1.toLowerCase() && ok.price<=price);
    console.table(nope);
    
}

while(true)
{
    console.log("-----CHOOSE-----");
    console.log("1. SHOW INVENTORY");
    console.log("2. ADD PRODUCT");
    console.log("3. REMOVE PRODUCT");
    console.log("4. FILTER PRODUCT");
    console.log("5. EXIT");
    let ANS=parseInt(r1.question("Enter your choice:"));
    switch(ANS)
    {
    case 1: showinventory();
            break;
    case 2: addproduct();
            break;
    case 3: removeproduct();
            break;
    case 4: filterproducts();
            break;
    case 5: process.exit(0);
    default: console.log("Invalid choice. Please try again.");
            break;
}}