import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
export const navLinks = [
  { id: 1, title: "Home", slug: "/" },
  { id: 2, title: "About", slug: "/about" },
  { id: 1, title: "Portfolio", slug: "/portfolio" },
  { id: 1, title: "Clients", slug: "/clients" },
  { id: 1, title: "Blog", slug: "/blog" },
  { id: 1, title: "Contact", slug: "/contact" },
];

export const navButtons = [
  { id: 3, title: "Sign Up", slug: "/sign-up", icon: <VscAccount /> },
  { id: 1, title: "Cart", slug: "/cart", icon: <MdOutlineLocalGroceryStore /> },
  { id: 2, title: "Become a Seller", slug: "/shop", icon: <BsShop /> },
  
];

export const sidebarButtons = [
{ id: 4, title: "", slug: "/language", icon: <IoLanguageSharp /> },
  {
    id: 5,
    title: "",
    slug: "/dark-mode",
    icon: <MdOutlineLightMode />,
  },
  {
    id: 6,
    title: "",
    slug: "#",
    icon: <CiMenuFries  />,
  },
] 
export const sideBarButtons = [
  {
    id: 1,
    title: "Grocery",
    slug: "/grocery",
    icon: "./assets/grocery.png",
    subSlug: [
      {
        id: 1,
        title: "Fruits",
        slug: "/fruits",
        subSlug: [
          { id: 1, title: "Apple", slug: "/apple" },
          { id: 2, title: "Banana", slug: "/banana" },
          { id: 3, title: "Mango", slug: "/mango" },
          { id: 4, title: "Orange", slug: "/orange" },
          { id: 5, title: "Pineapple", slug: "/pineapple" },
          { id: 6, title: "Watermelon", slug: "/watermelon" },
          { id: 7, title: "Grapes", slug: "/grapes" },
          { id: 8, title: "Strawberry", slug: "/strawberry" },
          { id: 9, title: "Blueberry", slug: "/blueberry" },
          { id: 10, title: "Raspberry", slug: "/raspberry" },
        ],
      },
      {
        id: 2,
        title: "Vegetables",
        slug: "/vegetables",
        subSlug: [
          { id: 1, title: "Carrot", slug: "/carrot" },
          { id: 2, title: "Potato", slug: "/potato" },
          { id: 3, title: "Tomato", slug: "/tomato" },
          { id: 4, title: "Cucumber", slug: "/cucumber" },
          { id: 5, title: "Onion", slug: "/onion" },
          { id: 6, title: "Garlic", slug: "/garlic" },
          { id: 7, title: "Ginger", slug: "/ginger" },
          { id: 8, title: "Mushroom", slug: "/mushroom" },
        ],
      },
      {
        id: 3,
        title: "Dairy",
        slug: "/dairy",
        subSlug: [
          { id: 1, title: "Milk", slug: "/milk" },
          { id: 2, title: "Cheese", slug: "/cheese" },
          { id: 3, title: "Yogurt", slug: "/yogurt" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Electronics",
    slug: "/electronics",
    icon: "./assets/device.png",
  },
  {
    id: 3,
    title: "Appliances",
    slug: "/appliances",
    icon: "./assets/electronics.png",
  },
  { id: 4, title: "Fashion", slug: "/fashion", icon: "./assets/fashion.png" },
  {
    id: 5,
    title: "Home & Furniture",
    slug: "/home-furniture",
    icon: "./assets/furnitures.png",
    subSlug: [
      {
        id: 1,
        title: "Fruits",
        slug: "/fruits",
        subSlug: [
          { id: 1, title: "Apple", slug: "/apple" },
          { id: 2, title: "Banana", slug: "/banana" },
          { id: 3, title: "Mango", slug: "/mango" },
          { id: 4, title: "Orange", slug: "/orange" },
          { id: 5, title: "Pineapple", slug: "/pineapple" },
          { id: 6, title: "Watermelon", slug: "/watermelon" },
          { id: 7, title: "Grapes", slug: "/grapes" },
          { id: 8, title: "Strawberry", slug: "/strawberry" },
          { id: 9, title: "Blueberry", slug: "/blueberry" },
          { id: 10, title: "Raspberry", slug: "/raspberry" },
        ],
      },
      {
        id: 2,
        title: "Vegetables",
        slug: "/vegetables",
        subSlug: [
          { id: 1, title: "Carrot", slug: "/carrot" },
          { id: 2, title: "Potato", slug: "/potato" },
          { id: 3, title: "Tomato", slug: "/tomato" },
          { id: 4, title: "Cucumber", slug: "/cucumber" },
          { id: 5, title: "Onion", slug: "/onion" },
          { id: 6, title: "Garlic", slug: "/garlic" },
          { id: 7, title: "Ginger", slug: "/ginger" },
          { id: 8, title: "Mushroom", slug: "/mushroom" },
        ],
      },
      {
        id: 3,
        title: "Dairy",
        slug: "/dairy",
        subSlug: [
          { id: 1, title: "Milk", slug: "/milk" },
          { id: 2, title: "Cheese", slug: "/cheese" },
          { id: 3, title: "Yogurt", slug: "/yogurt" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Beauty & Health",
    slug: "/beauty-health",
    icon: "./assets/shampoo.png",
  },
  { id: 7, title: "Sports", slug: "/sports", icon: "./assets/sports.png" },
  { id: 8, title: "More", slug: "#", icon: "./assets/more.png", subSlug: [
    {
      id: 1,
      title: "Fruits",
      slug: "/fruits",
      subSlug: [
        { id: 1, title: "Apple", slug: "/apple" },
        { id: 2, title: "Banana", slug: "/banana" },
        { id: 3, title: "Mango", slug: "/mango" },
        { id: 4, title: "Orange", slug: "/orange" },
        { id: 5, title: "Pineapple", slug: "/pineapple" },
        { id: 6, title: "Watermelon", slug: "/watermelon" },
        { id: 7, title: "Grapes", slug: "/grapes" },
        { id: 8, title: "Strawberry", slug: "/strawberry" },
        { id: 9, title: "Blueberry", slug: "/blueberry" },
        { id: 10, title: "Raspberry", slug: "/raspberry" },
      ],
    },
    {
      id: 2,
      title: "Vegetables",
      slug: "/vegetables",
      subSlug: [
        { id: 1, title: "Carrot", slug: "/carrot" },
        { id: 2, title: "Potato", slug: "/potato" },
        { id: 3, title: "Tomato", slug: "/tomato" },
        { id: 4, title: "Cucumber", slug: "/cucumber" },
        { id: 5, title: "Onion", slug: "/onion" },
        { id: 6, title: "Garlic", slug: "/garlic" },
        { id: 7, title: "Ginger", slug: "/ginger" },
        { id: 8, title: "Mushroom", slug: "/mushroom" },
      ],
    },
    {
      id: 3,
      title: "Dairy",
      slug: "/dairy",
      subSlug: [
        { id: 1, title: "Milk", slug: "/milk" },
        { id: 2, title: "Cheese", slug: "/cheese" },
        { id: 3, title: "Yogurt", slug: "/yogurt" },
      ],
    },
  ], },
];

export const subSlugegory = [
  { id: 1, title: "Title1", slug: "/title1" },
  { id: 2, title: "Title2", slug: "/title2" },
  { id: 3, title: "Title3", slug: "/title3" },
  { id: 4, title: "Title4", slug: "/title4" },
  { id: 5, title: "Title5", slug: "/title5" },
  { id: 6, title: "Title6", slug: "/title6" },
];
