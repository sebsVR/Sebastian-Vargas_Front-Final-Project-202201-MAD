import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { RegisterForm } from '../src/components/register-form';
import { useSelector } from 'react-redux';
import { UserButtons } from './components/user-button/user-button';
import { ContainerProducts } from './components/products-container/products-container';
import { ProductDetail } from './components/product-details/product-detail';
import { ProductForm } from './components/product-form/product-form';

// import { ContainerRobots } from './components/container-robots';
// import { NewRobotForm } from './components/form-new-robots';
// import { UpdateRobot } from './components/form-update-robot';

export function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<UserButtons />} />
          <Route path="/list-products" element={<ContainerProducts />} />
          <Route path="/detail-product/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </main>
    </div>
  );
}

// export default App;
