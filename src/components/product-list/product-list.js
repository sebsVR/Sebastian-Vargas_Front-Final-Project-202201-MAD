import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../product-details/product-details';
export function ProductList({ product }) {
  const dispatch = useDispatch();
  console.log(product);

  return (
    <>
      <div className="products">
        <Link to={`/detail-product/${product.id}`}>
          <h2 className="products-title">All Products</h2>
          <Link to="/add-product">
            <button>Add</button>
          </Link>
          <ProductDetails />
        </Link>
      </div>
    </>
  );
}
