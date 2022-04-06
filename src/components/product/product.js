import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productReducer } from '../../redux/control-products/products-reducers';
import './product.scss';

export function Product({ product }) {
  const dispatch = useDispatch();
  console.log(product);

  return (
    <>
      <div className="product">
        <Link to={`/detail-product/${product._id}`}>
          <p className="product-name">{product.name}</p>
          <img className="product-image" src={product.image} alt="Product" />
        </Link>
      </div>
    </>
  );
}
