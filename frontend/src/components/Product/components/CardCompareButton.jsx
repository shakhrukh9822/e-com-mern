import { useActions } from "hooks/actionHooks/useActions";
import { get } from "lodash";
import React from "react";

import { IoIosGitCompare } from "react-icons/io";
import { IoGitCompare } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectAllComparedProducts } from "store/slices/compare_products_slice/compare.products.slice";
import CardOptionsButton from "./CardOptionsButton";

const CardCompareButton = ({ product }) => {
  const { addCompareProduct, deleteCompareProduct } = useActions();
  const AllComparedProducts = useSelector(selectAllComparedProducts);

  const addedProductToCompare = AllComparedProducts.find(
    (comparedProduct) => comparedProduct._id === product._id
  );

  return (
    <CardOptionsButton title={"Compare"}>
      {get(addedProductToCompare, "isAddedToCompare", false) ? (
        <IoGitCompare
          size={24}
          onClick={() => deleteCompareProduct(product._id)}
        />
      ) : (
        <IoIosGitCompare
          size={24}
          onClick={() =>
            addCompareProduct({ ...product, isAddedToCompare: true })
          }
        />
      )}
    </CardOptionsButton>
  );
};

export default CardCompareButton;
