import { connect } from "react-redux";
import AddColorForm from "./ui/AddColorForm";
import { addColor, removeColor, rateColor, sortColors } from "../action";
import ColorList from "./ui/ColorList";
import SortMenu from "./ui/SortMenu";
import { sortFunction } from "../lib/array-helpers";

export const NewColor = connect(
  null,
  dispatch => ({
    onNewColor(title, color) {
      dispatch(addColor(title, color));
    }
  })
)(AddColorForm);

export const Menu = connect(
  state => ({
    sort: state.sort
  }),
  dispatch => ({
    onSelect(sortBy) {
      dispatch(sortColors(sortBy));
    }
  })
)(SortMenu);

export const Colors = connect(
  state => ({ colors: [...state.colors].sort(sortFunction(state.sort)) }),
  dispatach => ({
    onRemove(id) {
      dispatach(removeColor(id));
    },
    onRate(id, rating) {
      dispatach(rateColor(id, rating));
    }
  })
)(ColorList);
