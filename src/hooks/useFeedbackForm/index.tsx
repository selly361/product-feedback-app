import {
  addProduct,
  editProduct,
} from "features/product-feedback-app/productFeedbackSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useNavigate, useParams } from "react-router-dom";

import { v4 as generateId } from "uuid";
import { useForm } from "react-hook-form";

export const useFeedbackForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { roadmap, suggestions } = useAppSelector((state) => state);

  const { id } = useParams();

  const productToEdit = [...suggestions, ...roadmap].find(
    (product) => product.id === id
  );

  const {
    register,
    getValues,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: productToEdit?.title || "",
      category: productToEdit?.category || "feature",
      status: productToEdit?.status || "in-progress",
      description: productToEdit?.description || "",
    },
  });

  const handleSubmit = () => {
    
    const productRequest = {
      id: productToEdit?.id || generateId(),
      ...getValues(),
      status: getValues().status.toLowerCase(),
      category: getValues().category.toLowerCase(),
      upvotes: productToEdit?.upvotes || 0,
      upvoted: productToEdit?.upvoted || [],
      comments: productToEdit?.comments || [],
    };

    if (productToEdit) {

        dispatch(editProduct(productRequest))
    
    } 
    
    else {
    
      dispatch(addProduct(productRequest));
    
    }

    navigate("/");

  };


  return { errors, isValid, setValue, register, handleSubmit, watch }
  
};
