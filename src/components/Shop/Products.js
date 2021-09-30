import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS_DATA = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "The first book I ever wrote",
    },
    {
      id: "p2",
      price: 8,
      title: "My Second Book",
      description: "The Second book I ever wrote",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
