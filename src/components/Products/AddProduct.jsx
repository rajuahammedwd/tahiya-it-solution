

const AddProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const model = form.model.value;
        const description = form.description.value;
        const discountPrice = form.discountPrice.value;
        const price = form.price.value;
        const category = form.category.value;
        const brandName = form.brandName.value;
        const photoURL = form.photoURL.value;
        const product = {
            productName,
            model,
            description,
            discountPrice,
            price,
            category,
            brandName,
            photoURL
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.acknowledged) {
                alert('Product Added Successfully')
                form.reset();
            }
        })
    }
    return (
        <div>
            <h1 className="text-center text-5xl my-5">Add Product</h1>
            <div className="max-w-5xl mx-auto ">
                <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <input type="text" placeholder="Product Name" name="productName" className="input input-bordered w-full " />
                <input type="text" placeholder="Product Model" name="model" className="input input-bordered w-full " />
                <input type="text" placeholder="Description" name="description" className="input input-bordered w-full " />
                <input type="text" placeholder="Discount Price" name="discountPrice" className="input input-bordered w-full " />
                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full " />
                <input type="text" placeholder="Category" name="category" className="input input-bordered w-full " />
                <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered w-full " />
                <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered w-full " />
                </div>
                <input className="btn w-full bg-[#FD7800] text-white hover:text-[#FD7800] hover:bg-white" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;