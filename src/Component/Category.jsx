import React from 'react';

const Category = ({category}) => {
    const {segment_name,images}=category;
    return (
        <div>
            <h1>House name:{segment_name}</h1>
            <img src={images} alt="" />
        </div>
    );
};

export default Category;