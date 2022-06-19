function Services() {
    this.getListProductApi = function () {
        return axios({
            url: "https://62ac57e7bd0e5d29af20a3a6.mockapi.io/Product",
            method: "GET",
        });
    };

    this.deleteProductApi = function (id) {
        return axios({
            url: `https://62ac57e7bd0e5d29af20a3a6.mockapi.io/Product/${id}`,
            method: "DELETE",
        });
    };

    this.addProductApi = function (product){
        return axios({
            url: "https://62ac57e7bd0e5d29af20a3a6.mockapi.io/Product",
            method: "POST",
            data: product,
        });
    };

    this.getListProductById = function(id){
        return axios({
            url: `https://62ac57e7bd0e5d29af20a3a6.mockapi.io/Product/${id}`,
            method: "GET",
        });
    };

    this.updateProductApi = function(product){
        return axios({
            url: `https://62ac57e7bd0e5d29af20a3a6.mockapi.io/Product/${product.id}`,
            method: "PUT",
            data: product,
        })
    }
}