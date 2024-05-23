import { FormLabel } from "@chakra-ui/react";
import Item from "./Item";

export default function ItemCategory({ nameItemCategory, items, onDelete }) {
  return (
    <>
      <FormLabel fontSize={30} width="100%" mt={5} mb={2} ml={2}>
        {nameItemCategory}
      </FormLabel>
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
          />
        ))}
      </ul>
    </>
  );
}
