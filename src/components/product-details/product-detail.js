import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../services/apiProducts';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { productReducer } from '../../redux/control-products/products-reducers';

export function ProductDetail() {
  const navigate = useNavigate();
  const initialState = {
    name: '',
    image: '',
    description: '',
    category: '',
    subcategory: '',
    stocks: '',
    price: '',
  };
  const [product, setProduct] = useState(initialState);

  const { id } = useParams();

  useEffect(() => {
    api.getProduct(id).then((resp) => {
      console.log(resp.data);
      setProduct(resp.data);
    });
  }, []);

  const handleDelete = () => {
    api.deleteProduct(id);
    navigate('/list-products');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let result;
    result = await api.updateProduct(id, product);
    setProduct(result.data);
  };

  const handleChange = (ev) => {
    setProduct({ ...product, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <div className="product">
        {' '}
        <img className="product-image" src={product.image} alt="Product" />
        <form>
          <label>
            Name:
            <input
              className="product-name"
              value={product.name}
              id="name"
              name="name"
              type="text"
            />
          </label>
          <label>
            Description:
            <input
              className="product-description"
              value={product.description}
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
            />
          </label>
          <label>
            Category:
            <input
              className="product-category"
              value={product.category}
              id="category"
              name="category"
              type="text"
              onChange={handleChange}
            />
          </label>
          <label>
            Subcategory
            <input
              className="product-subcategory"
              value={product.subcategory}
              id="subcategory"
              name="subcategory"
              type="text"
              onChange={handleChange}
            />
          </label>
          <label>
            Stocks
            <input
              className="product-stocks"
              value={product.stocks}
              id="stocks"
              name="stocks"
              type="text"
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              className="product-price"
              value={product.price}
              id="price"
              name="price"
              type="price"
              onChange={handleChange}
            />
          </label>

          <button type="button" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
      <div>
        <Link to={'/list-products'}>
          <button type="button">Back</button>
        </Link>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
