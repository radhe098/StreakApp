"use client"
import { useState, useEffect } from 'react';

export default function Product() {
const [productData, setProductData] = useState(null);

    useEffect(() => {
         async function fetchData() {
            try {
                const res = await fetch("http://localhost:3000/api");
                const data = await res.json();
                setProductData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
       }
        fetchData();
    }, []);

    // Conditional rendering based on whether data has been loaded
    return (
        <div>
            <h1 className="text-4xl text-green-700">
                {productData ? productData.msg : "Loading..."}
            </h1>
        </div>
    );
}
