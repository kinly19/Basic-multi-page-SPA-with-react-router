import { Link } from 'react-router-dom';

const Products = (props) => {

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        {props.list.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}> {product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products; 