import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Banner1 from "../img/banner1.jpeg";
import Banner2 from "../img/banner2.jpeg";
import Banner3 from "../img/banner3.jpeg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Products = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  console.log(products);

  // get only electronics category
  const filteredProducts = products.filter((item) => {
    return item.category === "electronics";
  });

  // Filter products based on search query
  useEffect(() => {
    const filtered = filteredProducts.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProduct(filtered);
  }, [filteredProducts, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Slide show
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "300px",
  };

  const properties = {
    duration: 1500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  const slideImages = [
    {
      url: Banner1,
    },
    {
      url: Banner2,
    },
    {
      url: Banner3,
    },
  ];

  return (
    <div>
      <section className="py-20 bg-slate-50 ...">
        <div className="container mx-auto">
          {/* Slideshow */}
          <div className="slide-container mt-10">
            <Slide {...properties}>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
          </div>

          <h1 className="text-3xl font-semibold mb-10 mt-10 text-center">
            New Collections
          </h1>

          {/* Search Bar */}
          <div className="mb-10 px-60">
            <input
              type="text"
              placeholder="Search . . ."
              value={searchQuery}
              onChange={handleSearchChange}
              className=" w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProduct.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
