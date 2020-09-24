import breakfast1 from "../../resources/Breakfast/breakfast1.png";
import breakfast2 from "../../resources/Breakfast/breakfast2.png";
import breakfast3 from "../../resources/Breakfast/breakfast3.png";
import breakfast4 from "../../resources/Breakfast/breakfast4.png";
import breakfast5 from "../../resources/Breakfast/breakfast5.png";
import breakfast6 from "../../resources/Breakfast/breakfast6.png";

import lunch1 from "../../resources/lunch/lunch1.png";
import lunch2 from "../../resources/lunch/lunch2.png";
import lunch3 from "../../resources/lunch/lunch3.png";
import lunch4 from "../../resources/lunch/lunch4.png";
import lunch5 from "../../resources/lunch/lunch5.png";
import lunch6 from "../../resources/lunch/lunch6.png";

import dinner1 from "../../resources/Dinner/dinner1.png";
import dinner2 from "../../resources/Dinner/dinner2.png";
import dinner3 from "../../resources/Dinner/dinner3.png";
import dinner4 from "../../resources/Dinner/dinner4.png";
import dinner5 from "../../resources/Dinner/dinner5.png";
import dinner6 from "../../resources/Dinner/dinner6.png";

const foods = [
  {
    id: 1,
    category: "breakfast",
    name: "Bagel and cream cheese",
    image: breakfast1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 6.99,
  },
  {
    id: 2,
    category: "breakfast",
    name: "Breakfast sandwich",
    image: breakfast2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 9.99,
  },

  {
    id: 3,
    category: "breakfast",
    name: "Baked Chiken",
    image: breakfast3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 10.99,
  },
  {
    id: 4,
    category: "breakfast",
    name: "Eggs Benedict",
    image: breakfast4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 8.99,
  },
  {
    id: 5,
    category: "breakfast",
    name: "Toast Croissant Fried egg",
    image: breakfast5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 19.99,
  },
  {
    id: 6,
    category: "breakfast",
    name: "Full Breakfast Fried Egg Toast Brunch",
    image: breakfast6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 3.33,
  },
  {
    id: 7,
    category: "lunch",
    name: "Healthy Meal Plan",
    image: lunch1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 23.99,
  },
  {
    id: 8,
    category: "lunch",
    name: "Fried Chiken Bento",
    image: lunch2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 9.99,
  },
  {
    id: 9,
    category: "lunch",
    name: "Tarragon Rubbed Salmon",
    image: lunch3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 6.99,
  },
  {
    id: 10,
    category: "lunch",
    name: "Indian Lunch",
    image: lunch4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 8.99,
  },
  {
    id: 11,
    category: "lunch",
    name: "Beef Steak",
    image: lunch5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 15.99,
  },
  {
    id: 12,
    category: "lunch",
    name: "Honey Soy Glazed Salmon with Peppers",
    image: lunch6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 7.99,
  },
  {
    id: 13,
    category: "dinner",
    name: "Salmon with Grapefruit and Lentil Salad",
    image: dinner1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 9.99,
  },
  {
    id: 14,
    category: "dinner",
    name: "Lemony Salmon Picata",
    image: dinner2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 10.99,
  },
  {
    id: 15,
    category: "dinner",
    name: "Pork Tenderloin with Quinoa Pilaf",
    image: dinner3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 12.99,
  },
  {
    id: 16,
    category: "dinner",
    name: "French fries with cheese",
    image: dinner4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 8.99,
  },
  {
    id: 17,
    category: "dinner",
    name: "Garlic Butter Baked Salmon",
    image: dinner5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 6.99,
  },
  {
    id: 18,
    category: "dinner",
    name: "Baked Chiken",
    image: dinner6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    short_desc: "How we dream about our future",
    price: 9.99,
  },
];

export default foods;
