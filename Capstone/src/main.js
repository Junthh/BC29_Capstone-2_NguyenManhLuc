var service = new Services();

function getEle(id) {
    return document.getElementById(id);
}

function getListProduct() {
    var promise = service.getListProductApi();
    promise
        .then(function (result) {
            renderListProduct(result.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

getListProduct();

function renderListProduct(data) {
    var contentHTML = "";
    data.forEach(function (product) {
        contentHTML += `
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card cardPhone">
                        <img src="./img/${product.img}" alt="...">
                        <div class="card-body">
                            <div class="">
                                <div>
                                    <h3 class="cardPhone__title">${product.name}</h3>
                                    <p class="cardPhone__text">${product.desc}</p>
                                </div>
                                <div>
                                    <h3 class="cardPhone__title">$${product.price}</h3>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <button class="btnPhone-shadow"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    });

    getEle("listProduct").innerHTML = contentHTML;
}

