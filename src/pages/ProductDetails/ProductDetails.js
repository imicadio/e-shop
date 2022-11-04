import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CartNormal from "../../components/Add-to-cart/Cart-normal/Cart-normal";
import Loader from "../../components/Loader/Loader";
import Container from "../../layout/Container/Container";
import { fetchProducts } from "../../redux/slice/listProductSlice";
import Gallery from "./Gallery/Gallery";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const products = useSelector(fetchProducts);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const findProduct = products.filter((x) => x.id == id);
    if (findProduct.length > 0) {
      setProduct(findProduct[0]);
      setThumbsSwiper(findProduct[0].images);
    }
  }, [products]);

  // { amount, setAmount, stock, product }
  const [amount, setAmount] = useState(1);
  return (
    <Container customClass="px-3 py-5" breadcrumbs>
      {!product ? (
        <Loader />
      ) : (
        <div className="columns p-5">
          <div className="column is-half">
            {thumbsSwiper ? <Gallery thumbs={thumbsSwiper} /> : null}
          </div>
          <div className="column is-half">
            <h2 className="title is-2">{product.title}</h2>
            <h3 className="title is-5">
              {product.brand} -{" "}
              <span className="title is-6">{product.category}</span>
            </h3>
            <h4 className="title is-5">{product.price}$</h4>
            <p className="mb-5">{product.description}</p>
            <CartNormal
              amount={amount}
              setAmount={setAmount}
              stock={product.stock}
              product={product}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductDetails;
