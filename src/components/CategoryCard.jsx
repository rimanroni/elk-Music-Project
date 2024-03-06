import React from 'react';

const CategoryCard = () => {
    return (
        <div>
            <div class="h-32 w-32 relative cursor-pointer mb-5">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;