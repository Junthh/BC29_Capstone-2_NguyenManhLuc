var services = new Services();
var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
}

function getListProducts() {
    services
        .getListProductApi()
        .then(function (result) {
            renderListProducts(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getListProducts();

function renderListProducts(data) {
    var contentHTML = "";
    data.forEach(function (product, index) {
        contentHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>
                    <img class="img-fluid" src="../../assets/img/${product.img}" width = "50"/>
                </td>
                <td>${product.screen}</td>
                <td>${product.backCamera}</td>
                <td>${product.frontCamera}</td>
                <td>${product.desc}</td>
                <td>${product.type}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${product.id})">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Xóa</button>
                </td>
            </tr>
        `;
    });

    getEle("tblDanhSachSP").innerHTML = contentHTML;
}


/**
 * Xóa Sản phẩm
 */

function deleteProduct(id) {
    services
        .deleteProductApi(id)
        .then(function (result) {
            // render table
            alert("Xóa thành công")
            getListProducts();
        })
        .catch(function (error) {
            console.log(error);
        });
}

getEle("btnThemSP").onclick = function () {
    // Sửa lại title modal
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thênm sản phẩm";

    var footer = `<button class= "btn btn-success" onclick="addProduct()">Add</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
}

function addProduct() {
    var tenSP = getEle("TenSP").value;
    var giaSP = getEle("GiaSP").value;
    var hinhSP = getEle("HinhSP").value;
    var manHinh = getEle("ManHinh").value
    var cameraSau = getEle("CameraSau").value;
    var cameraTruoc = getEle("CameraTruoc").value;
    var moTa = getEle("MoTa").value;
    var loaiSP = getEle("LoaiSP").value;

    var isValid = true;

    isValid &= validation.kiemTraSP(tenSP, '(*) Vui lòng nhập tên sản phẩm');

    isValid &= validation.kiemTraGia(giaSP, '(*) Không được để trống', '(*) Giá phải là số');

    isValid &= validation.kiemTraHinhAnh(hinhSP, '(*) Không được để trống');

    isValid &= validation.kiemTraMoTa(moTa, '(*) Không được để trống', "(*) Mô tả không quá 60 kí tự")

    isValid &= validation.kiemTraLoaiSP(loaiSP, '(*) Không được để trống');

    isValid &= validation.kiemTraRong( "tbManHinh", manHinh, '(*) Không được để trống');

    isValid &= validation.kiemTraRong( "tbCameraSau", cameraSau, '(*) Không được để trống');

    isValid &= validation.kiemTraRong( "tbCammeraTruoc", cameraTruoc, '(*) Không được để trống');

    if (!isValid) return;


    var product = new Product("", tenSP, giaSP, hinhSP, manHinh, cameraSau, cameraTruoc, moTa, loaiSP);

    services
        .addProductApi(product)
        .then(function () {
            getListProducts();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function editProduct(id) {
    // Sửa lại title modal
    document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa sản phẩm";

    var footer = `<button class= "btn btn-success" onclick="updateProduct(${id})">Update</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

    services
        .getListProductById(id)
        .then(function (result) {
            getEle("TenSP").value = result.data.name;
            getEle("GiaSP").value = result.data.price;
            getEle("HinhSP").value = result.data.img;
            getEle("ManHinh").value = result.data.screen;
            getEle("CameraSau").value = result.data.backCamera;
            getEle("CameraTruoc").value = result.data.frontCamera;
            getEle("MoTa").value = result.data.desc;
            getEle("LoaiSP").value = result.data.type;
        })
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * Update
 */
function updateProduct(id) {
    var tenSP = getEle("TenSP").value;
    var giaSP = getEle("GiaSP").value;
    var hinhSP = getEle("HinhSP").value;
    var manHinh = getEle("ManHinh").value
    var cameraSau = getEle("CameraSau").value;
    var cameraTruoc = getEle("CameraTruoc").value;
    var moTa = getEle("MoTa").value;
    var loaiSP = getEle("LoaiSP").value;


    var product = new Product( id, tenSP, giaSP, hinhSP, manHinh, cameraSau, cameraTruoc, moTa, loaiSP);

    services
        .updateProductApi(product)
        .then(function () {
            getListProducts();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (error) {
            console.log(error);
        });
}