// import {
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
// } from "@chakra-ui/react";

// export default function CreateItemForm() {
//   return (
//     <form className="w-full flex flex-col gap-3">
//       <h3 className="font-bold text-xl">Создание позиции</h3>
//       <FormControl isRequired>
//         <FormLabel htmlFor="name-item" mb="0">
//           Название покупки
//         </FormLabel>
//         <Input placeholder="Купить бублики" id="name-item"></Input>
//       </FormControl>

//       <FormControl>
//         <FormLabel htmlFor="quantity-items" mb="0">
//           Выберите количество желаемых покупок
//         </FormLabel>
//         <NumberInput defaultValue={1} min={1} id="quantity-items">
//           <NumberInputField />
//           <NumberInputStepper>
//             <NumberIncrementStepper />
//             <NumberDecrementStepper />
//           </NumberInputStepper>
//         </NumberInput>
//       </FormControl>

//       <FormControl>
//         <FormLabel htmlFor="item-category" mb="0">
//           Категория
//         </FormLabel>
//         <Select
//           placeholder="Выбор категории"
//           variant="outline"
//           id="item-category"
//         >
//           <option>Продукты</option>
//           <option>Бытовая химия</option>
//         </Select>
//       </FormControl>

//       <FormControl display="flex" alignItems="center">
//         <FormLabel htmlFor="is-bought" mb="0">
//           Куплен продукт?
//         </FormLabel>
//         <Switch id="is-bought" />
//       </FormControl>

//       <Button>Создать</Button>
//     </form>
//   );
// }
