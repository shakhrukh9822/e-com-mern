import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/exports";

// actions===========================================
import { actions } from "store/actions";
// ==================================================

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...actions }, dispatch);
};
