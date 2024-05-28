import { DeleteIcon } from "@chakra-ui/icons";
import {
  FormLabel,
  Card,
  Checkbox,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  IconButton,
} from "@chakra-ui/react";
import ModalEditItem from "./ModalEditItem";

export default function Item({
  id,
  nameItem,
  quantity,
  isBought,
  itemCategoryId,
  onDelete,
  itemCategories,
  onUpdateItem
}) {
  const item = {
    _id: id,
    _nameItem: nameItem,
    _quantity: quantity,
    _isBought: isBought,
    _itemCategoryId: itemCategoryId,
  };

  const handleCheckboxChange = async (e) => {
    const updatedItem = { ...item, _isBought: e.target.checked };
    await onUpdateItem(updatedItem);
  };

  return (
    <li className="flex justify-center items-center">
      <Card
        width="100%"
        display="grid"
        gridTemplateColumns="auto 1fr auto"
        gridTemplateRows="auto auto"
        alignItems="center"
        variant={isBought ? "outline" : "filled"}
        borderWidth={1}
        borderColor="#E2E8F0"
        gap={0}
        p={0}
        m={0}
      >
        <Checkbox
          size="lg"
          ml="15px"
          p="0"
          gridColumn="1 / 2"
          gridRow="1 / 3"
          alignSelf="center"
          isChecked={isBought}
          onChange={handleCheckboxChange}
        ></Checkbox>
        <CardHeader gridColumn="2 / 3" gridRow="1 / 2" p="0 0 0 15px" mt="auto">
          <Heading size="md">{nameItem}</Heading>
        </CardHeader>
        <CardBody gridColumn="2 / 3" gridRow="2 / 3" p="0 0 0 15px">
          <FormLabel m={0}>Количество : {quantity}</FormLabel>
        </CardBody>
        <CardFooter
          gridColumn="3 / 4"
          gridRow="1 / 3"
          display="flex"
          flexDirection="row"
          gap={2}
          m={0}
        >
          <ModalEditItem
            item={item}
            itemCategories={itemCategories}
            onUpdateItem={onUpdateItem}
          />
          <IconButton variant="outline" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </CardFooter>
      </Card>
    </li>
  );
}
