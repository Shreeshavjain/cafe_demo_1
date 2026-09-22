export type Category = "Pizza" | "Burger" | "Coffee" | "Desserts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const MENU_CATEGORIES: Category[] = ["Pizza", "Burger", "Coffee", "Desserts"];

export const MENU_DATA: Record<Category, MenuItem[]> = {
  Pizza: [
    {
      id: "p1",
      name: "Margherita",
      description: "Wood-fired pizza with fresh mozzarella and basil.",
      price: 349,
      image: "/images/signature/pizza-main.png",
    },
    {
      id: "p2",
      name: "Farmhouse",
      description: "Crisp capsicum, succulent mushrooms, and fresh tomatoes.",
      price: 449,
      image: "/images/signature/pizza-main.png",
    },
    {
      id: "p3",
      name: "Pepper Paneer",
      description: "Chunky paneer with crisp capsicum and spicy red paprika.",
      price: 499,
      image: "/images/signature/pizza-main.png",
    },
    {
      id: "p4",
      name: "Veg Supreme",
      description: "Black olives, green capsicum, mushroom, onion, and sweet corn.",
      price: 549,
      image: "/images/signature/pizza-main.png",
    },
    {
      id: "p5",
      name: "Four Cheese",
      description: "A rich blend of mozzarella, cheddar, gouda, and parmesan.",
      price: 599,
      image: "/images/signature/pizza-main.png",
    },
    {
      id: "p6",
      name: "Truffle Mushroom",
      description: "Wild mushrooms, truffle oil, roasted garlic, and thyme.",
      price: 649,
      image: "/images/signature/pizza-main.png",
    },
  ],
  Burger: [
    {
      id: "b1",
      name: "Classic Veg Burger",
      description: "Crispy potato patty with fresh lettuce, tomato, and mayo.",
      price: 199,
      image: "/images/menu/burger.avif",
    },
    {
      id: "b2",
      name: "Smoky Paneer Burger",
      description: "Grilled paneer with smoked BBQ sauce and caramelized onions.",
      price: 279,
      image: "/images/menu/burger.avif",
    },
    {
      id: "b3",
      name: "Crispy Mushroom Burger",
      description: "Panko-crusted mushroom patty with truffle aioli.",
      price: 299,
      image: "/images/menu/burger.avif",
    },
    {
      id: "b4",
      name: "Cheese Burst Burger",
      description: "Molten cheese core patty topped with jalapeños.",
      price: 329,
      image: "/images/menu/burger.avif",
    },
    {
      id: "b5",
      name: "Peri Peri Burger",
      description: "Spicy vegetable patty with house-made peri peri sauce.",
      price: 249,
      image: "/images/menu/burger.avif",
    },
    {
      id: "b6",
      name: "Signature Burger",
      description: "Double patty, extra cheese, onion rings, and special sauce.",
      price: 399,
      image: "/images/menu/burger.avif",
    },
  ],
  Coffee: [
    {
      id: "c1",
      name: "Espresso",
      description: "Rich, full-bodied espresso with a velvety crema.",
      price: 149,
      image: "/images/menu/coffe.png",
    },
    {
      id: "c2",
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and milk foam.",
      price: 199,
      image: "/images/menu/coffe.png",
    },
    {
      id: "c3",
      name: "Latte",
      description: "Smooth espresso layered with gently steamed milk.",
      price: 229,
      image: "/images/menu/coffe.png",
    },
    {
      id: "c4",
      name: "Flat White",
      description: "Double ristretto with micro-foamed milk.",
      price: 249,
      image: "/images/menu/coffe.png",
    },
    {
      id: "c5",
      name: "Mocha",
      description: "Espresso with premium dark chocolate and steamed milk.",
      price: 279,
      image: "/images/menu/coffe.png",
    },
    {
      id: "c6",
      name: "Cold Brew",
      description: "Slow-steeped for 18 hours for a remarkably smooth finish.",
      price: 299,
      image: "/images/menu/coffe.png",
    },
  ],
  Desserts: [
    {
      id: "d1",
      name: "Tiramisu",
      description: "Classic Italian dessert layered with mascarpone and espresso.",
      price: 349,
      image: "/images/menu/desert.png",
    },
    {
      id: "d2",
      name: "Chocolate Lava Cake",
      description: "Warm, gooey chocolate center served with vanilla bean ice cream.",
      price: 299,
      image: "/images/menu/desert.png",
    },
    {
      id: "d3",
      name: "Cheesecake",
      description: "New York style baked cheesecake with mixed berry compote.",
      price: 399,
      image: "/images/menu/desert.png",
    },
    {
      id: "d4",
      name: "Brownie",
      description: "Fudgy walnut brownie served warm with chocolate ganache.",
      price: 249,
      image: "/images/menu/desert.png",
    },
    {
      id: "d5",
      name: "Belgian Waffle",
      description: "Crispy waffle topped with Nutella, strawberries, and cream.",
      price: 329,
      image: "/images/menu/desert.png",
    },
    {
      id: "d6",
      name: "Vanilla Panna Cotta",
      description: "Silky Italian cream dessert infused with real Madagascar vanilla.",
      price: 279,
      image: "/images/menu/desert.png",
    },
  ],
};
