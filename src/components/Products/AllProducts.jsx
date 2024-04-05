import { useLoaderData } from "react-router-dom";
import SingleProducts from "./SingleProducts";


const AllProducts = () => {
const loadeddata = useLoaderData();
    console.log(loadeddata);
    return (
        <div className="my-10">
             <div className="text-center my-10">
                <h2 className="text-xl font-bold">All Products</h2>  
                <p>Get Your Product By Categories</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    loadeddata.map(product => <SingleProducts
                        key={product._id}
                        product={product}
                    ></SingleProducts>)
                }
                
            </div>
            
        </div>
    );
};

export default AllProducts;