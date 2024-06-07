import axios from "axios"

export const fetchItemCategories = async () => {
    try{
        var response = await axios.get("/ShoppingList/GetItemCategories");
        console.log(response.data.itemCategories)
        return response.data.itemCategories;
    }
    catch(e){
        console.error(e);
    }
}

export const createItem = async (item) => {
    try{
        var response = await axios.post("/ShoppingList/CreateItem", item);
        
        return response.status;
    }
    catch(e){
        console.error(e);
    }
}

export const createItemCategory = async (itemCategory) => {
    try{
        var response = await axios.post("/ShoppingList/CreateItemCategory", itemCategory);
        
        return response.status;
    }
    catch(e){
        console.error(e);
    }
}

export const deleteItem = async (id) => {
    try{
        var response = await axios.delete(`/ShoppingList/DeleteItem/${id}`);
        
        return response.status;
    }
    catch(e){
        console.error(e);
    }
}

export const updateItem = async (item) => {
    try {
        const requestPayload = {
            Id: item._id,
            nNameItem: item._nameItem,
            nQuantity: item._quantity,
            nIsBought: item._isBought,
            nItemCategoryId: item._itemCategoryId
        };

        const response = await axios.patch(`/ShoppingList/EditItem`, requestPayload);
        
        return response.status;
    } catch (e) {
        console.error(e);
    }
}

export const updateItemCategory = async (itemCategory) => {
    try {
        const requestPayload = {
            Id: itemCategory._id,
            nNameItemCategory: itemCategory._nameItemCategory,
        };

        const response = await axios.patch(`/ShoppingList/EditItemCategory`, requestPayload);
        
        return response.status;
    } catch (e) {
        console.error(e);
    }
}

export const deleteItemCategory = async (id) => {
    try {

        const response = await axios.delete(`/ShoppingList/DeleteItemCategory/${id}`);
        console.log(response.data);
        
        return response.status;
    } catch (e) {
        console.error(e);
    }
}

// import axios from "axios"

// const apiClient = axios.create({
//   baseURL: "/ShoppingList",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const fetchItemCategories = async () => {
//   try {
//     const response = await apiClient.get("/GetItemCategories");
//     console.log(response.data.itemCategories);
//     return response.data.itemCategories;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export const createItem = async (item) => {
//   try {
//     const response = await apiClient.post("/CreateItem", item);
//     return response.status;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export const createItemCategory = async (itemCategory) => {
//   try {
//     const response = await apiClient.post("/CreateItemCategory", itemCategory);
//     return response.status;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export const deleteItem = async (id) => {
//   try {
//     const response = await apiClient.delete(`/DeleteItem/${id}`);
//     return response.status;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export const updateItem = async (item) => {
//   try {
//     const requestPayload = {
//       Id: item._id,
//       nNameItem: item._nameItem,
//       nQuantity: item._quantity,
//       nIsBought: item._isBought,
//       nItemCategoryId: item._itemCategoryId
//     };

//     const response = await apiClient.patch("/EditItem", requestPayload);
//     return response.status;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export const updateItemCategory = async (itemCategory) => {
//   try {
//     const requestPayload = {
//       Id: itemCategory._id,
//       nNameItemCategory: itemCategory._nameItemCategory,
//     };

//     const response = await apiClient.patch("/EditItemCategory", requestPayload);
//     return response.status;
//   } catch (e) {
//     console.error(e);
//   }
// }
