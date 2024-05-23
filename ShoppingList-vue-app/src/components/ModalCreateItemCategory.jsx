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
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ModalCreateItemCategory({onCreateItemCategory}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemCategory, setItemCategory] = useState({
    nameItemCategory: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateItemCategory(itemCategory);
    setItemCategory({ nameItemCategory: "" });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Создать категорию</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Создание категории</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb={3}>
              <FormLabel htmlFor="name-item" mb="0">
                Название категории
              </FormLabel>
              <Input
                placeholder="Продукты"
                id="name-item"
                value={itemCategory.nameItemCategory}
                onChange={(e) => setItemCategory({ ...itemCategory, nameItemCategory: e.target.value })}
              ></Input>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onSubmit}>
              Создать
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
