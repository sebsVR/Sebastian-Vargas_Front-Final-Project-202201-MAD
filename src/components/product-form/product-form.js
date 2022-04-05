import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../services/apiProducts';
import * as action from '../../redux/control-products/action-creator';
import { Link } from 'react-router-dom';

export function ProductForm() {
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

  const handleChange = (ev) => {
    setProduct({ ...product, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    console.log(product);
    ev.preventDefault();
    const result = await api.addProduct(product);
    setProduct(initialState);
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>Add a product</legend>
          <input
            className="product__name"
            type="text"
            name="name"
            placeholder="Name"
            value={product.name}
            onChange={handleChange}
          />
          <input
            className="product__image"
            type="text"
            name="image"
            placeholder="Image"
            value={product.image}
            onChange={handleChange}
          />
          <input
            className="product__description"
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
          />
          <input
            className="product__category"
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
          />
          <input
            className="product__subcategory"
            type="text"
            name="subcategory"
            placeholder="Subcategory"
            value={product.subcategory}
            onChange={handleChange}
          />
          <input
            className="product__stocks"
            type="text"
            name="stocks"
            placeholder="stocks"
            value={product.stocks}
            onChange={handleChange}
          />
          <input
            className="product__price"
            type="text"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />
        </fieldset>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>

      <div>
        <Link to={'/list-products'}>
          <button type="button">Back</button>
        </Link>
      </div>
    </>
  );
}
