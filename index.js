const productsDiv=document.querySelector(".products");


function getProductsData(){

    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        const products=data.products;

        products.forEach(element => {
            const newProduct =createNewProduct(element);
            productsDiv.appendChild(newProduct);


            
        });

       
    })


}

getProductsData();


function createNewProduct(productsDetails)
{
    const product=document.createElement('div');
    product.setAttribute('class','product')

    const productImg=document.createElement('div');
    productImg.setAttribute('class','product-img')

    const image=document.createElement('img');
    image.setAttribute('src',productsDetails.thumbnail);

    const productInfo=document.createElement('div');
    productInfo.setAttribute("class","product-info");

    const title=document.createElement('h2');
    title.setAttribute('class','title');
    const description=document.createElement('span');
    description.setAttribute("class","description");
    const brand=document.createElement('span');
    brand.setAttribute('class','brand');
    const price=document.createElement('span');
    price.setAttribute('class','price');
    const ratings=document.createElement('span');
    ratings.setAttribute('class','ratings');

    productInfo.appendChild(title);
    productInfo.appendChild(description);
    productInfo.appendChild(brand);
    productInfo.appendChild(price);
    productInfo.appendChild(ratings);

    product.appendChild(productImg);
    productImg.appendChild(image);
    product.appendChild(productInfo);





    
    


    
    title.textContent=productsDetails.title;
    description.textContent=productsDetails.description;
    brand.textContent=productsDetails.brand;
    price.textContent=productsDetails.price;
    ratings.textContent=productsDetails.rating;
    
    



return product;

}


const SearchIndex =document.querySelector('input').value;



async function Search(){

    const url=`https://dummyjson.com/products/search?q=${SearchIndex}}`;
    const response= await fetch(url);
    const data=await response.json();
    console.log(data);





}


Search();