import { createSelector } from "reselect";

export default createSelector(
    state => state.menu.historyMenus,
    historyMenus => historyMenus
)
