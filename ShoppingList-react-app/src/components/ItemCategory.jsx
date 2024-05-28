import { FormLabel } from "@chakra-ui/react";
import Item from "./Item";
import EditableCategory from "./EditableCategory";

export default function ItemCategory({
  id,
  nameItemCategory,
  items,
  itemCategories,
  onDelete,
  onUpdateItem,
  onEditItemCategory,
}) {
  return (
    <>
      {/* <FormLabel fontSize={30} mt={5} mb={2} ml={2}>
          {nameItemCategory}
        </FormLabel> */}
      <EditableCategory
        key={id}
        id={id}
        nameItemCategory={nameItemCategory}
        onEditItemCategory={onEditItemCategory}
      />
      <ul className="flex flex-col gap-5 w-full">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            nameItem={item.nameItem}
            quantity={item.quantity}
            isBought={item.isBought}
            itemCategoryId={item.itemCategoryId}
            onDelete={onDelete}
            onUpdateItem={onUpdateItem}
            itemCategories={itemCategories}
          />
        ))}
      </ul>
    </>
  );
}
