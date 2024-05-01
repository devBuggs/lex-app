import { deleteTab } from '../utils/warehouseSlice';

const handleContextMenuBtnOnClick = (event, dispatch, menuData, buttonData) => {
    event.preventDefault();
    console.log("=========>>>>>>> buttonData :: ", buttonData);
    dispatch(deleteTab({
        id: menuData.id
    }));
}

export {
    handleContextMenuBtnOnClick
}