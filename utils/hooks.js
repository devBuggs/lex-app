import { deleteTab, duplicateTab, addToFavouriteTab } from '../utils/warehouseSlice';

const handleContextMenuBtnOnClick = (event, dispatch, menuData, buttonData) => {
    event.preventDefault();
    console.log("=========>>>>>>> buttonData :: ", buttonData);

    switch (buttonData.actionType) {
        case "deleteTab":
            console.log("-------> deleteTab action <-------")
            dispatch(deleteTab({
                id: menuData.id
            }));
            break;
        case "getTabInfo":
            console.log("-------> getTabInfo action <-------")
            // dispatch(deleteTab({
            //     id: menuData.id
            // }));
            break;
        case "renameTab":
            console.log("-------> renameTab action <-------")
            // dispatch(deleteTab({
            //     id: menuData.id
            // }));
            break;
        case "favouriteTab":
            console.log("-------> favouriteTab action <-------")
            dispatch(addToFavouriteTab({
                id: menuData.id,
                isFav: true
            }));
            break;
        case "duplicateTab":
            console.log("-------> duplicateTab action <-------")
            dispatch(duplicateTab({
                id: menuData.id
            }));
            break;
        default:
            console.log("-------> default action <-------")
            break;
    }
    
}

const handleLoadEditorState = (tabId) => {
    console.log("==> handleLoadEditorState - ", tabId)
}

export {
    handleContextMenuBtnOnClick,
    handleLoadEditorState
}