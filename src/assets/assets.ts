import cpu_img from "./cpu_img.jpg";
import gpu_img from "./gpu_img.jpg";
import ram_img from "./ram_img.jpg";
import ssd_img from "./ssd_img.jpg";
import motherboard_img from "./motherboard_img.jpg";
import keyboard_img from "./keyboard_img.jpg";
import keyboard_img_2 from "./keyboard_img_2.jpg";
import keyboard_img_3 from "./keyboard_img_3.jpg";
import keyboard_img_4 from "./keyboard_img_4.jpg";

import logo from "./logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.jpg";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};

export const products = [
  {
    _id: "comp001",
    name: "Intel Core Ultra 9 285",
    description:
      "A high-performance 13th Gen processor from Intel with 24 cores, ideal for gaming and content creation. Supports PCIe 5.0 and DDR5 memory.",
    price: 599,
    image: [cpu_img],
    category: "components",
    subCategory: "processor",
    sizes: ["Standard"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "comp002",
    name: "GIGABYTE AOURUS MASTER GeForce RTX 5080 OC",
    description:
      "Top-tier graphics card with ray tracing and DLSS 3.0 support, built for 4K gaming and AI workloads.",
    price: 1199,
    image: [gpu_img],
    category: "components",
    subCategory: "graphics",
    sizes: ["Standard"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "comp003",
    name: "TEAMGROUP T-FORCE DELTA RGB DDR5 32GB",
    description:
      "High-speed DDR5 memory for gaming and multitasking, with customizable RGB lighting.",
    price: 189,
    image: [ram_img],
    category: "components",
    subCategory: "memory",
    sizes: ["32GB", "64GB"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "comp004",
    name: "Kingston Fury Renegade 4TB NVMe PCIE 4.0",
    description:
      "Ultrafast internal SSD with PCIe Gen4 interface, suitable for high-speed gaming and professional workloads.",
    price: 129,
    image: [ssd_img],
    category: "components",
    subCategory: "storage",
    sizes: ["4TB", "5TB"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "comp005",
    name: "ASUS ROG Maximus Z790 FORMULA",
    description:
      "Premium gaming motherboard with support for Intel 13th Gen CPUs, Wi-Fi 6E, and enhanced power delivery.",
    price: 399,
    image: [motherboard_img],
    category: "components",
    subCategory: "motherboard",
    sizes: ["ATX"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "comp006",
    name: "Logitech Pro X 60",
    description:
      "Premium gaming keyboard with customizable RGB lighting and mechanical optical switches.",
    price: 199,
    image: [keyboard_img, keyboard_img_2],
    category: "peripherals",
    subCategory: "keyboard",
    sizes: ["60"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "comp007",
    name: "Redragon Draconic Pro",
    description:
      "Premium gaming keyboard with customizable RGB lighting and mechanical switches.",
    price: 49,
    image: [keyboard_img_3, keyboard_img_4],
    category: "peripherals",
    subCategory: "keyboard",
    sizes: ["60"],
    date: 1716634345448,
    bestseller: true,
  },
];

