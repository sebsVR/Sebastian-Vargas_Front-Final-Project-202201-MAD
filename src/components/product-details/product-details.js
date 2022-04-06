import { useEffect, useState } from 'react';
import * as api from '../../services/apiProducts';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { productReducer } from '../../redux/control-products/products-reducers';
import './product-details.scss';

export function ProductDetails() {
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
        <p>{product.name}</p>
        <img className="product-image" src={product.image} alt="Product" />
        <form className="product-form">
          <label className="product-form__label" for="name">
            Name
          </label>
          <input
            className="product-form__name"
            value={product.name}
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
          />

          <label className="product-form__label" for="description">
            Description
          </label>

          <textarea
            className="product-form__description"
            value={product.description}
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
          >
            Description
          </textarea>
          <label className="product-form__label" for="category">
            Category
          </label>
          <input
            className="product-form__category"
            value={product.category}
            id="category"
            name="category"
            type="text"
            onChange={handleChange}
          />

          <label className="product-form__label" for="subcategory">
            Subcategory
          </label>
          <input
            className="product-form__subcategory"
            value={product.subcategory}
            id="subcategory"
            name="subcategory"
            type="text"
            onChange={handleChange}
          />

          <label className="product-form__label" for="stocks">
            Stocks
          </label>
          <input
            className="product-form__stocks"
            value={product.stocks}
            id="stocks"
            name="stocks"
            type="text"
            onChange={handleChange}
          />

          <label className="product-form__label" for="price">
            Price
          </label>
          <input
            className="product-form__price"
            value={product.price}
            id="price"
            name="price"
            type="text"
            onChange={handleChange}
          />

          <button
            className="product-form__update"
            type="button"
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
      </div>
      <div className="button">
        <Link to={'/list-products'}>
          <button className="button-back" type="button">
            Back
          </button>
        </Link>
        <button className="button-delete" type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
