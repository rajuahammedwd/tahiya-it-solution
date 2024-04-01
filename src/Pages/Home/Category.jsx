import { useEffect, useState } from "react";


const Category = () => {
    const [categories, setCategories] = useState([])
   useEffect(() => {
    fetch('fakeDB.json')
    .then(res => res.json())
    .then(data => setCategories(data))
   },[])
    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-xl font-bold">Features and Categories</h2>
                <p>Get Your Product By Categories</p>
            </div>
            
            <div className="max-w-xl mx-auto bg-slate-200 grid grid-cols-5 gap-5">
                {categories.map(category => <div className="flex flex-col items-center border bg-slate-400 w-20 h-20" key={category.id}>
                    <img className="w-[55px] h-[55px]" src={category.img} alt="" />
                    <h3>{category.title}</h3>
                </div>)}
            </div>
            
        </div>
    );
};

export default Category;