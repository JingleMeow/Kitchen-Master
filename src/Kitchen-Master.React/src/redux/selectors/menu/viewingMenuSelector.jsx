import { createSelector } from "reselect";

export default createSelector(
    state => state.menu.viewingMenu,
    viewingMenu => viewingMenu
)
