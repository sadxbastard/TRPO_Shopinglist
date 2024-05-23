import axios from "axios"

export const fetchItemCategories = async () => {
    try{
        var response = await axios.get("https://localhost:7149/ShoppingList/GetItemCategories");
        
        return response.data.itemCategories;
    }
    catch(e){
        console.error(e);
    }
}

export const createItem = async (item) => {
    try{
        var response = await axios.post("https://localhost:7149/ShoppingList/CreateItem", item);
        
        return response.status;
    }
    catch(e){
        console.error(e);
    }
}

export const createItemCategory = async (itemCategory) => {
    try{
        var response = await axios.post("https://localhost:7149/ShoppingList/CreateItemCategory", itemCategory);
        
        return response.status;
    }
    catch(e){
        console.error(e);
    }
}

export const deleteItem = async (id) => {
    try{
        var response = await axios.delete(`https://localhost:7149/ShoppingList/DeleteItem/${id}`);
        
        return response.status;
    }
    catch(e){
        console.error(e);
    }
}