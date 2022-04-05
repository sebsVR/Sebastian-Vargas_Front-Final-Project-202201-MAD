import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as api from '../../services/apiProducts.js';
import * as action from '../../redux/members/action-creator.js';
import { Product } from '../product/product.js';

import { UserButtons } from '../user-button/user-button.js';
import { Link } from 'react-router-dom';

export function ContainerProducts() {
  const user = useSelector((state) => state.user);

  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    api.getAllProducts().then((resp) => {
      console.log(resp.data);
      setProduct(resp.data);
    });
  }, [dispatch, user.token]);

  return (
    <>
      <h1 className="title">Personal Store</h1>
      <h2 className="title"> Welcome {user.userName}</h2>
      {product.length ? (
        <>
          <div className="container-products">
            {product.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
          <div>
            <Link to={'/add-product'}>
              <button type="button">Add product</button>
            </Link>
          </div>
        </>
      ) : (
        <p>There are no products</p>
      )}
      <div className="add-button-container"></div>
    </>
  );
}
