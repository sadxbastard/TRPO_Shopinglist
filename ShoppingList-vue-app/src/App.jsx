import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import ItemCategory from "./components/ItemCategory";
import ModalCreateItem from "./components/ModalCreateItem";
import ModalCreateItemCategory from "./components/ModalCreateItemCategory";
import { createItem, createItemCategory, deleteItem, fetchItemCategories } from "./servises/Items";
import { useEffect, useState } from "react";

function App() {
  const [itemCategories, setItemCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      let itemCategories = await fetchItemCategories();
      setItemCategories(itemCategories);
    };

    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCategories =
    selectedCategory === "all"
      ? itemCategories
      : itemCategories.filter((category) => category.id === selectedCategory);

  const onCreateItem = async (item) => {
    await createItem(item);
    let itemCategories = await fetchItemCategories();
    setItemCategories(itemCategories);
  };

  const onCreateItemCategory = async (itemCategory) => {
    await createItemCategory(itemCategory);
    let itemCategories = await fetchItemCategories();
    setItemCategories(itemCategories);
  };

  const onDelete = async (id) => {
    await deleteItem(id);
    let itemCategories = await fetchItemCategories();
    setItemCategories(itemCategories);
  }

  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <ModalCreateItem onCreateItem={onCreateItem} itemCategories={itemCategories}/>
        <ModalCreateItemCategory onCreateItemCategory={onCreateItemCategory}/>
        <FormControl>
          <Select
            variant="outline"
            id="item-category"
            onChange={handleCategoryChange}
          >
            <option value="all">Все категории</option>
            {itemCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.nameItemCategory}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-wrap w-1/2">
        <FormLabel fontSize={32} width="100%" m={0}>
          Список покупок:
        </FormLabel>
        {filteredCategories.map((category) => (
          <ItemCategory
            key={category.id}
            nameItemCategory={category.nameItemCategory}
            items={category.items}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
