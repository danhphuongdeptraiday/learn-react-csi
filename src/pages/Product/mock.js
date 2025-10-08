export function generateFakeProducts(n) {
  const categories = [
    "Điện tử",
    "Thời trang",
    "Gia dụng",
    "Phụ kiện",
    "Mỹ phẩm",
    "Sách",
    "Thể thao",
    "Trang trí",
  ];

  const adjectives = [
    "Cao cấp",
    "Giá rẻ",
    "Sang trọng",
    "Thời thượng",
    "Bền đẹp",
    "Tiện lợi",
    "Mini",
    "Đa năng",
  ];

  const productTypes = [
    "Áo thun",
    "Giày thể thao",
    "Tai nghe",
    "Bình giữ nhiệt",
    "Bàn phím",
    "Nến thơm",
    "Túi xách",
    "Sách kỹ năng",
    "Đồng hồ",
    "Chuột máy tính",
  ];

  const descriptions = [
    "Sản phẩm chất lượng cao, thiết kế tinh tế và tiện dụng.",
    "Mang lại trải nghiệm tuyệt vời cho người dùng.",
    "Phù hợp sử dụng hằng ngày hoặc làm quà tặng.",
    "Được nhiều khách hàng yêu thích và tin dùng.",
    "Thiết kế hiện đại, dễ dàng sử dụng và bảo quản.",
  ];

  // const products = Array.from({ length: n }, (_, i) => {
  //   const name =
  //     `${productTypes[Math.floor(Math.random() * productTypes.length)]} ` +
  //     `${adjectives[Math.floor(Math.random() * adjectives.length)]}`;
  //   const category = categories[Math.floor(Math.random() * categories.length)];
  //   const description =
  //     descriptions[Math.floor(Math.random() * descriptions.length)];
  //   const price = Math.floor(Math.random() * 900000) + 100000; // 100k–1tr
  //   const image = `https://picsum.photos/300/200?random=${Math.floor(
  //     Math.random() * 1000
  //   )}`;

  //   return {
  //     id: i + 1,
  //     name,
  //     price,
  //     category,
  //     description,
  //     image,
  //   };
  // });

  let products = [];
  for (let i = 0; i < n; i++) {
    let product = {};
    const name =
      `${productTypes[Math.floor(Math.random() * productTypes.length)]} ` +
      `${adjectives[Math.floor(Math.random() * adjectives.length)]}`;
    const category = categories[Math.floor(Math.random() * categories.length)];
    const description =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    // Math.random() = 0.7 * 5 => 3.5
    const price = Math.floor(Math.random() * 900000) + 100000; // 100k–1tr
    const image = `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 1000
    )}`;

    product = {
      id: i + 1,
      name: name,
      price: price,
      category,
      description,
      image,
    };

    products.push(product);
  }

  return products;
}