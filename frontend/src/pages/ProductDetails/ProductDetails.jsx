import React from "react";
import { get } from "lodash";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "store/slices/products_slice/products.slice";

// outsider components
import { Stars } from "components/Stars";
import { Badge } from "components/Badge";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { ProductDetailsContent } from "components/Skeletons";
import { ProductDetailsThumbSliderSkeleton } from "components/Skeletons";

// Insider components
import AddToCart from "./components/AddToCart";
import ProductStock from "./components/ProductStock";
import SubmitReviews from "./components/SubmitReviews";
import ProductDetailsImageThumb from "./components/ProductDetailsImageThumb";
import ReviewCardsRow from "./components/ReviewCardsRow";
import { ApiError } from "components/ApiError";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetProductDetailQuery(id);

  const price = get(data, "product.price", 0);
  const stock = get(data, "product.stock", 0);
  const images = get(data, "product.images", []);
  const ratings = get(data, "product.ratings", 0);
  const reviews = get(data, "product.reviews", []);
  const productId = get(data, "product._id", "Product ID");
  const numOfReviews = get(data, "product.numOfReviews", 0);
  const brand = get(data, "product.brand", "Product Brand");
  const productName = get(data, "product.name", "Product Name");
  const description = get(data, "product.description", "description");
  const productModel = get(data, "product.productModel", "Product Model");

  return (
    <Container>
      <Helmet>
        <title>{productName}</title>
      </Helmet>
      <MainTitle
        title={"Product Details"}
        extraClasses={"mb-8 mx-auto lg:mx-0"}
      />
      <ApiError error={error} isError={isError}>
        <div className="product-details__section border-b-[1px]">
          {isLoading ? (
            <div className="my-6">
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="lg:w-[40%] xl:w-[50%] w-[100%] xxl:px-32 xl:px-24 lg:pb-0 pb-2 lg:border-b-0 border-b-2">
                  <ProductDetailsThumbSliderSkeleton />
                </div>
                <div className="lg:w-[60%] xl:w-[50%] w-[100%]">
                  <ProductDetailsContent />
                </div>
              </div>
            </div>
          ) : (
            <div className="my-6">
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="product-details-slides lg:w-[40%] xl:w-[50%] w-[100%] xxl:px-32 xl:px-24 lg:pb-0 pb-2 lg:border-b-0 border-b-2">
                  <ProductDetailsImageThumb images={images} />
                </div>
                <div className="lg:w-[60%] xl:w-[50%] w-[100%] lg:p-5">
                  <div className="details-block-one flex mb-2 items-start justify-between flex-col sm:flex-row">
                    <div className="">
                      <p className="md:text-[20px] text-[18px]">
                        Product id: {productId}
                      </p>
                      <h2 className="md:text-[30px] text-[24px]">
                        {productName}
                      </h2>
                    </div>
                    <div className="flex sm:justify-end sm:flex-col">
                      <Badge
                        title={stock < 1 ? "Out Of Stock" : "In Stock"}
                        extraClass={
                          stock < 1
                            ? "text-red-700 border-red-700 bg-red-100"
                            : "text-green-800 border-green-800 bg-gray-100"
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[30px]">Model: {productModel}</h2>
                    <h2 className="text-[30px]">Brand: {brand}</h2>
                  </div>
                  <div className="flex md:items-center justify-between flex-col md:flex-row mb-2">
                    <div className="flex justify-between md:w-[70%] md:pr-4 mb-3 md:mb-0">
                      <h2 className="text-[30px]">Price: {price}$</h2>
                      <ProductStock />
                    </div>
                    <div className="md:w-[30%]">
                      <AddToCart />
                    </div>
                  </div>
                  <div className="flex line-height-1 justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <div
                        className="md:text-[28px] text-[20px] sm:mt-0 mt-2"
                        style={{ lineHeight: 1, marginBottom: "5px" }}
                      >
                        <span>Review{numOfReviews > 1 ? "s" : null} </span>
                        <span>({numOfReviews})</span>
                      </div>
                      <Stars rating={ratings} />
                    </div>
                    <SubmitReviews />
                  </div>
                  <div className="border p-2 rounded-md text-[18px]">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="product-details__reviews my-10">
          <ReviewCardsRow reviews={reviews} isLoading={isLoading} />
        </div>
      </ApiError>
    </Container>
  );
};

export default ProductDetails;
