document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/products")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");

            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>Category: ${product.category}</p>
                    <p>Price: Rs ${product.price}</p>
                `;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
