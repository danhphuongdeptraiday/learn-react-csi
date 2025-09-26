import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Áo Thun Nam Cotton",
    price: 199000,
    category: "Thời trang",
    description: "Áo thun nam chất liệu cotton mềm mại, thoáng mát.",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "Giày Thể Thao Unisex",
    price: 450000,
    category: "Giày dép",
    description: "Giày thể thao unisex phong cách trẻ trung, năng động.",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "Tai Nghe Bluetooth",
    price: 350000,
    category: "Điện tử",
    description: "Tai nghe Bluetooth âm thanh sống động, pin lâu.",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    name: "Túi Xách Da Nữ",
    price: 599000,
    category: "Phụ kiện",
    description: "Túi xách da nữ sang trọng, phù hợp mọi dịp.",
    image: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 5,
    name: "Bình Giữ Nhiệt 500ml",
    price: 150000,
    category: "Gia dụng",
    description: "Bình giữ nhiệt 500ml giữ nóng/lạnh lên đến 12 giờ.",
    image: "https://picsum.photos/300/200?random=5",
  },
];

function Products() {
  const [expandID, setExpandID] = useState([]); // Array because saved lots of ID

  const toggleDescription = (id) => {
    if (expandID.includes(id)) {
      setExpandID(expandID.filter((item) => item !== id));
    } else {
      setExpandID([...expandID, id]); 
    }
  };

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
            <strong>{products.price.toLocaleString()}</strong>
          </p>

          <button
            onClick={() => toggleDescription(products.id)}
            style={{ cursor: "pointer", background: "none", border: "none" }}
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
      ;
    </div>
  );
}

export default Products;