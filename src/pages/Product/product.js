import React, { useState, useEffect } from "react";

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
  {
    id: 6,
    name: "Sách Kỹ Năng Sống",
    price: 120000,
    category: "Sách",
    description:
      "Cuốn sách truyền cảm hứng giúp bạn phát triển bản thân và tư duy tích cực.",
    image: "https://picsum.photos/300/200?random=6",
  },
  {
    id: 7,
    name: "Bàn Phím Cơ RGB",
    price: 890000,
    category: "Điện tử",
    description:
      "Bàn phím cơ đèn RGB chuyển màu mượt mà, cảm giác gõ cực kỳ đã tay.",
    image: "https://picsum.photos/300/200?random=7",
  },
  {
    id: 8,
    name: "Nến Thơm Thư Giãn",
    price: 180000,
    category: "Trang trí",
    description:
      "Nến thơm mùi lavender giúp giảm căng thẳng và tạo không gian thư giãn.",
    image: "https://picsum.photos/300/200?random=8",
  },
  {
    id: 9,
    name: "Bộ Cốc Thủy Tinh 6 Cái",
    price: 220000,
    category: "Gia dụng",
    description:
      "Cốc thủy tinh cao cấp, chịu nhiệt tốt, dùng được cho máy rửa chén.",
    image: "https://picsum.photos/300/200?random=9",
  },
  {
    id: 10,
    name: "Sữa Rửa Mặt Thiên Nhiên",
    price: 135000,
    category: "Mỹ phẩm",
    description:
      "Sữa rửa mặt chiết xuất trà xanh, làm sạch nhẹ nhàng và ngăn ngừa mụn.",
    image: "https://picsum.photos/300/200?random=10",
  },
];

function Products() {
  const [expandID, setExpandID] = useState([]); // Array vì lưu nhiều ID

  const toggleDescription = (id) => {
    if (expandID.includes(id)) {
      setExpandID(expandID.filter((item) => item !== id));
    } else {
      setExpandID([...expandID, id]);
    }
  };

  const [showMore, setShowMore] = useState(false);

  // Tạo hàm đổi trạng thái
  const toggleVisibleProducts = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {(showMore ? products : products.slice(0, 5)).map((products) => (
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
