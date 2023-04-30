import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";

/* const tempCategories = menu.map((item) => item.category);
// get only unique categories
const categories = new Set(tempCategories);
const filters = ["all", categories]; */

// one line code example of above
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
