import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopDataContext } from '../context/shopContext'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';

function ProductDetail() {

    let { productId } = useParams();

    let { products, currency ,addtoCart,} = useContext(ShopDataContext);

    let [productData, setProductData] = useState(null);

    const [image, setImage] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState("");


    const fetchProductData = () => {
        const found = products.find((item) => item._id === productId || item.id === productId);
        if (!found) return;

        setProductData(found);
        setImage1(found.image1 || "");
        setImage2(found.image2 || "");
        setImage3(found.image3 || "");
        setImage4(found.image4 || "");
        setImage(found.image1 || "");

        const availableSizes = Array.isArray(found.sizes)
            ? found.sizes
            : Array.isArray(found.size)
                ? found.size
                : found.sizes
                    ? [found.sizes]
                    : found.size
                        ? [found.size]
                        : [];
        setSizes(availableSizes);
        setSelectedSize(availableSizes[0] || "");
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

   return productData ? (
<div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-center justify-center gap-[30px] px-[20px] lg:px-[60px] py-[80px]'>

    <div className='w-full max-w-[1400px] flex flex-col lg:flex-row gap-[30px]'>

        {/* Small Images */}
        <div className='flex lg:flex-col gap-[15px] items-center justify-start'>

            <div className='w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-slate-300 rounded-md overflow-hidden cursor-pointer'>
                <img src={image1} alt="" className='w-full h-full object-cover'
                onClick={() => setImage(image1)} />
            </div>

            <div className='w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-slate-300 rounded-md overflow-hidden cursor-pointer'>
                <img src={image2} alt="" className='w-full h-full object-cover'
                onClick={() => setImage(image2)} />
            </div>

            <div className='w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-slate-300 rounded-md overflow-hidden cursor-pointer'>
                <img src={image3} alt="" className='w-full h-full object-cover'
                onClick={() => setImage(image3)} />
            </div>

            <div className='w-[70px] h-[70px] md:w-[90px] md:h-[90px] bg-slate-300 rounded-md overflow-hidden cursor-pointer'>
                <img src={image4} alt="" className='w-full h-full object-cover'
                onClick={() => setImage(image4)} />
            </div>

        </div>

        {/* Big Image */}
        <div className='lg:w-[45%] w-full h-[500px] bg-white rounded-lg overflow-hidden flex items-center justify-center'>

            <img
                src={image}
                alt=""
                className='w-full h-full object-cover'
            />

        </div>

        {/* Product Details */}
        <div className='lg:w-[35%] w-full flex flex-col gap-[15px] text-white'>

            <h1 className='text-[32px] md:text-[40px] font-bold'>
                {productData.name.toUpperCase()}
            </h1>
            <div className='flex items-center gap-1'>

                {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className='text-yellow-500' />
                ))}

                <FaStarHalfAlt className='text-yellow-500 text-bold' />
                <span className='text-[14px] text-slate-400'>(4.5)</span>


            </div>

            <p className='text-[20px] font-semibold'>
                Price: Rs {currency} {productData.price}.00
            </p>

            <p className='text-[16px] text-slate-400 leading-[28px] mb-[20px]'>
                {productData.description}
            </p>

            <div className='flex flex-col gap-[10px] my-[10px]'>
                <p className='text-[25px] font-semibold pl-[5px] text-white'> Select Size </p>

                <div className='flex gap-2 flex-wrap'>
                    {sizes.map((item, index) => (
                        <button
                            key={index}
                            className={`border py-2 px-4 rounded-md transition ${item === selectedSize ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-slate-700'}`}
                            onClick={() => setSelectedSize(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className='flex items-center gap-[10px] mt-[20px]'>
                    <button className='bg-[#0c2025] text-white px-[30px] py-[10px] rounded-md hover:bg-slate-500 transition duration-300' onClick={() => addtoCart(productData._id, selectedSize)}>
                        Add to Cart
                    </button>
                </div>

                <div className='w-full h-[2px] bg-slate-700 my-[20px]'></div>

                <div className='w-full text-[16px] text-white'>
                    <p className='text-[18px] font-semibold mb-[10px]'>Product Details</p>
                    <p className='text-[14px] text-slate-400 leading-[28px]'>
                        Category: {productData.category} <br />
                        Sub Category: {productData.subcategory} <br />
                        Available Sizes: {productData.sizes?.join(", ")} <br />
                        Delivery Charges: {currency} 100
                    </p>
                </div>
            </div>
        </div>

    </div>

    <div className='w-full min-h-[70vh] rounded-3xl p-6 mt-[40px]'>
        <div className='flex gap-4 mb-6'>
            <button className='border border-slate-300 px-5 py-3 text-sm text-white rounded-md bg-slate-900'>Description</button>
            <button className='border border-slate-300 px-5 py-3 text-sm text-white rounded-md bg-slate-900'>Reviews</button>
        </div>

        <div className='bg-[#11181d] rounded-2xl p-6 text-slate-200'>
            <p className='text-[18px] font-semibold text-white mb-4'>upgrade your style with our exclusive collection of men's clothing. From trendy t-shirts to stylish jackets, we have everything you need to elevate your wardrobe. Our high-quality fabrics and attention to detail ensure that you'll look and feel your best. Whether you're dressing up for a night out or keeping it casual for everyday wear, our.</p>
        
        </div>

        <RelatedProduct category ={productData.category} subcategory ={productData.subcategory} currentProductId ={productData._id} />
    </div>

</div>
) : (
<div className='w-full h-screen flex items-center justify-center text-white'>
            Loading...
        </div>
)

        
}

export default ProductDetail;





