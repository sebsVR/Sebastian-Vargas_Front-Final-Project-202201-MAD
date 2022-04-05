import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productReducer } from '../../redux/control-products/products-reducers';

export function Product({ product }) {
  const dispatch = useDispatch();
  console.log(product);

  return (
    <>
      <div className="products">
        <Link to={`/detail-product/${product._id}`}>
          <p>{product.name}</p>
          <img src={product.image} alt="Product" />
        </Link>
      </div>
    </>
  );
}
