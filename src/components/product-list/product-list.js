import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetail } from '../product-details/product-detail';
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
          <ProductDetail />
        </Link>
      </div>
    </>
  );
}
