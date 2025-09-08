import Single from '../../components/Single/Single';
import { singleProduct } from '../../data';
import './productDetails.scss';

const ProductDetails = () => {
  // Fetch data and pass to a single component
  return (
    <div className="productDetails">
      <Single {...singleProduct} />
    </div>
  );
};

export default ProductDetails;
