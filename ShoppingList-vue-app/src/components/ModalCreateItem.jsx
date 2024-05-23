// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   NumberDecrementStepper,
//   NumberIncrementStepper,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   Select,
//   Switch,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { useState } from "react";

// export default function ModalCreateItem({ onCreate }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [item, setItem] = useState(null);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     setItem(null);
//     onCreate(item);
//   };

//   return (
//     <>
//       <Button onClick={onOpen}>Создать позицию</Button>

//       <Modal onSubmit={onSubmit} isOpen={isOpen} onClose={onClose} size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Создание позиции</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl isRequired mb={3}>
//               <FormLabel htmlFor="name-item" mb="0">
//                 Название покупки
//               </FormLabel>
//               <Input
//                 placeholder="Купить бублики"
//                 id="name-item"
//                 onChange={(e) => setItem({ ...item, nameItem: e.target.value })}
//               ></Input>
//             </FormControl>

//             <FormControl mb={3}>
//               <FormLabel htmlFor="quantity-items" mb={0}>
//                 Выберите количество желаемых покупок
//               </FormLabel>
//               <NumberInput
//                 defaultValue={1}
//                 min={1}
//                 id="quantity-items"
//               >
//                 <NumberInputField onChange={(e) => setItem({ ...item, quantity: parseInt(e.target.value) })}/>
//                 <NumberInputStepper>
//                   <NumberIncrementStepper />
//                   <NumberDecrementStepper />
//                 </NumberInputStepper>
//               </NumberInput>
//             </FormControl>

//             <FormControl mb={3}>
//               <FormLabel htmlFor="item-category" mb="0">
//                 Категория
//               </FormLabel>
//               <Select
//                 placeholder="Выбор категории"
//                 variant="outline"
//                 id="item-category"
//                 onChange={(e) => setItem({ ...item, category: e.target.value })}
//               >
//                 <option>Продукты</option>
//                 <option>Бытовая химия</option>
//               </Select>
//             </FormControl>

//             <FormControl display="flex" alignItems="center">
//               <FormLabel htmlFor="is-bought" mb="0">
//                 Куплен продукт?
//               </FormLabel>
//               <Switch
//                 id="is-bought"
//                 onChange={(e) =>
//                   setItem({ ...item, isBought: e.target.checked })
//                 }
//               />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button mr={3} onClick={onSubmit} /*onClick={onClose}*/>
//               Создать
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

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
} from "@chakra-ui/react";
import { useState } from "react";

export default function ModalCreateItem({ onCreateItem, itemCategories }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [item, setItem] = useState({
    nameItem: "",
    quantity: 1,
    nameItemCategory: "",
    isBought: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateItem(item);
    setItem({ nameItem: "", quantity: 1, nameItemCategory: "", isBought: false });
    onClose();
  };

  const handleQuantityChange = (value) => {
    setItem({ ...item, quantity: parseInt(value) });
  };

  return (
    <>
      <Button onClick={onOpen}>Создать позицию</Button>

      <Modal onSubmit={onSubmit} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Создание позиции</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb={3}>
              <FormLabel htmlFor="name-item" mb="0">
                Название покупки
              </FormLabel>
              <Input
                placeholder="Купить бублики"
                id="name-item"
                value={item.nameItem}
                onChange={(e) => setItem({ ...item, nameItem: e.target.value })}
              ></Input>
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor="quantity-items" mb={0}>
                Выберите количество желаемых покупок
              </FormLabel>
              <NumberInput
                value={item.quantity}
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
                placeholder="Выбор категории"
                variant="outline"
                id="item-category"
                value={item.nameItemCategory}
                onChange={(e) => setItem({ ...item, nameItemCategory: e.target.value })}
              >
                {itemCategories.map((category) => (
                  <option key={category.id} value={category.nameItemCategory}>
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
                isChecked={item.isBought}
                onChange={(e) =>
                  setItem({ ...item, isBought: e.target.checked })
                }
              />
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
