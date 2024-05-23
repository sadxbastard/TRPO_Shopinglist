import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  FormLabel,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Item({
  id,
  nameItem,
  quantity,
  isBought,
  itemCategoryId,
  onDelete
}) {
  const [item, setItem] = useState({
    _id: id,
    _nameItem: nameItem,
    _quantity: quantity,
    _isBought: isBought,
    _itemCategoryId: itemCategoryId,
  });

  return (
    <li className="flex justify-center items-center">
      <Card
        width="100%"
        display="grid"
        gridTemplateColumns="auto 1fr auto"
        gridTemplateRows="auto auto"
        gap={0}
        alignItems="center"
        variant="filled"
        p={0}
      >
        <Checkbox
          size="lg"
          ml="15px"
          gridColumn="1 / 2"
          gridRow="1 / 3"
          alignSelf="center"
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
          <IconButton variant="outline">
            <EditIcon></EditIcon>
          </IconButton>
          <IconButton variant="outline" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </CardFooter>
      </Card>
    </li>
  );
}
