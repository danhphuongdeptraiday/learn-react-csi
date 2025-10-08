import React, { useState, useEffect } from "react";
import { generateFakeProducts } from "./mock";

function Products() {
  const [expandID, setExpandID] = useState([]); // Array vì lưu nhiều ID
  const [limit, setLimit] = useState(5);

  const [products, setProducts] = useState(generateFakeProducts(5));

  const toggleDescription = (id) => {
    if (expandID.includes(id)) {
      setExpandID(expandID.filter((item) => item !== id));
    } else {
      setExpandID([...expandID, id]);
    }
  };

  const [showMore, setShowMore] = useState(false);

  const toggleVisibleProducts = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (products.length > 5 || showMore) {
      setProducts((pre) => {
        return [...pre, ...generateFakeProducts(5)];
      });
    }
  }, [showMore]);

  // khi mà component được mount thì lúc đấy là lần đầu tiên được xuất hiện trong cây DOM
  // Component được mount khi reload page hoặc chuyển từ trang này sang trang khác

  // Re-render: Khi thay đổi state, hoặc khi save lại file code

  // // Tạo hàm đổi trạng thái
  // const toggleVisibleProducts = () => {
  //   // setLimit(pre => pre + 5)

  //   // let newProducts = generateFakeProducts(5)
  //   setProducts(pre => {
  //     return [...pre, ...generateFakeProducts(5)]
  //   })
  // };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {products.map((products) => (
        <div
          key={products.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px",
            width: "250px",
            textAlign: "center",
          }}
        >
          <img
            src={products.image}
            alt={products.name}
            style={{ width: "100%", borderRadius: "6px" }}
          />

          <h3>{products.name}</h3>

          <p>
            <strong>{products?.price?.toLocaleString()}</strong>
          </p>

          <button
            onClick={() => toggleDescription(products.id)}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            {expandID.includes(products.id) ? "Hide" : "Read more"}
          </button>

          {expandID.includes(products.id) && (
            <p style={{ marginTop: "8px", color: "#555" }}>
              {products.description}
            </p>
          )}
        </div>
      ))}
      <button
        onClick={toggleVisibleProducts}
        style={{
          cursor: "pointer",
          width: "100px",
          height: "20px",
          padding: "10px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showMore ? "Hide" : "More"}
      </button>
    </div>
  );
}

export default Products;
