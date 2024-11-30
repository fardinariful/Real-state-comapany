import { useState } from "react";
import Banner from "./Banner";
import { useEffect } from "react";
import Category from "./Category";

const Home = () => {
    const [categories,setcategories]=useState([]);
    useEffect(()=>{
        fetch('Category.json')
        .then(res=>res.json())
        .then(data=>setcategories(data))
    },[])
    return (
        <div>
            <Banner/>
            <h1>Total Category:{categories.length}</h1>
            {
                categories.map(category =><Category key={category.category_id}  category={category}></Category>)
            }
        </div>
    );
};

export default Home;