export type PartCategory = "Lọc" | "Phanh" | "Dầu nhớt" | "Nhông sên dĩa" | "Ắc quy" | "BugI";

export type Part = {
  sku: string;
  name: string;
  category: PartCategory;
  price: number;
  stock: number;
  compatible: string[];
  supplier: string;
  warranty: string;
  desc: string;
};

export const parts: Part[] = [
  {
    sku: "PT-LOC-001",
    name: "Lọc dầu động cơ (universal)",
    category: "Lọc",
    price: 85000,
    stock: 24,
    compatible: ["Honda", "Yamaha", "Suzuki"],
    supplier: "Kho A",
    warranty: "7 ngày đổi mới",
    desc: "Lọc dầu phổ thông, phù hợp nhiều dòng xe số/tay ga.",
  },
  {
    sku: "PT-PH-002",
    name: "Bố thắng đĩa trước",
    category: "Phanh",
    price: 155000,
    stock: 12,
    compatible: ["Honda", "Yamaha"],
    supplier: "Kho B",
    warranty: "15 ngày",
    desc: "Bố thắng đĩa độ bền cao, bám tốt khi phanh gấp.",
  },
  {
    sku: "PT-DN-003",
    name: "Dầu nhớt 10W-40 (1L)",
    category: "Dầu nhớt",
    price: 128000,
    stock: 40,
    compatible: ["Honda", "Yamaha", "Suzuki", "SYM", "Piaggio"],
    supplier: "Kho A",
    warranty: "Theo tem",
    desc: "Nhớt máy 10W-40 cho xe máy, chạy phố và đường dài.",
  },
  {
    sku: "PT-ACQ-004",
    name: "Ắc quy 12V (tùy dòng)",
    category: "Ắc quy",
    price: 420000,
    stock: 6,
    compatible: ["Honda", "Yamaha", "Piaggio"],
    supplier: "Kho C",
    warranty: "6 tháng",
    desc: "Ắc quy 12V, vui lòng đối chiếu kích thước trước khi lắp.",
  },
];
