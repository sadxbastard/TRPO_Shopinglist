import { EditIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Switch,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ModalEditItem({ item, itemCategories, onUpdateItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editedItem, setEditedItem] = useState({ ...item });

  useEffect(() => {
    setEditedItem({ ...item });
  }, [item]);

  const handleQuantityChange = (value) => {
    setEditedItem({ ...editedItem, _quantity: parseInt(value) });
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setEditedItem({
      ...editedItem,
      _itemCategoryId: categoryId,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdateItem(editedItem);
    onClose();
  };

  const onOpenModal = (e) => {
    e.preventDefault();
    setEditedItem(item);
    onOpen();
  }

  return (
    <>
      <IconButton variant="outline" onClick={onOpenModal}>
        <EditIcon></EditIcon>
      </IconButton>
      <Modal onSubmit={onSubmit} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Редактирование позиции</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={3}>
              <FormLabel htmlFor="name-item" mb="0">
                Название покупки
              </FormLabel>
              <Input
                placeholder="Купить бублики"
                id="name-item"
                value={editedItem._nameItem}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, _nameItem: e.target.value })
                }
              ></Input>
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor="quantity-items" mb={0}>
                Количество желаемых покупок
              </FormLabel>
              <NumberInput
                value={editedItem._quantity}
                min={1}
                id="quantity-items"
                onChange={handleQuantityChange}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor="item-category" mb="0">
                Категория
              </FormLabel>
              <Select
                variant="outline"
                id="item-category"
                value={editedItem._itemCategoryId}
                onChange={handleCategoryChange}
              >
                {itemCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.nameItemCategory}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="is-bought" mb="0">
                Куплен продукт?
              </FormLabel>
              <Switch
                id="is-bought"
                isChecked={editedItem._isBought}
                onChange={(e) =>
                  setEditedItem({ ...editedItem, _isBought: e.target.checked })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} type="submit" onClick={onSubmit}>
              Сохранить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
