import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  useEditableControls,
} from "@chakra-ui/react";
import { useState } from "react";
import ItemCategory from "./ItemCategory";

export default function EditableCategory({ id, nameItemCategory, onEditItemCategory }) {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup size="sm">
        <IconButton
          icon={<CheckIcon />}
          {...getSubmitButtonProps({ onClick: onSubmit })}
        />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    );
  }

  const [itemCategory, setItemCategory] = useState({
    _id: id,
    _nameItemCategory: nameItemCategory,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onEditItemCategory(itemCategory);
  };

  return (
    <div className="flex items-center">
      <Editable
        fontSize={30}
        mt={5}
        mb={2}
        ml={2}
        textAlign="start"
        defaultValue={itemCategory._nameItemCategory}
        isPreviewFocusable={false}
      >
        <EditablePreview />
        <Input
          fontSize={30}
          as={EditableInput}
          onChange={(e) =>
            setItemCategory({
              ...itemCategory,
              _nameItemCategory: e.target.value,
            })
          }
        />
        <EditableControls />
      </Editable>
    </div>
  );
}
// import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
// import {
//   ButtonGroup,
//   Editable,
//   EditableInput,
//   EditablePreview,
//   Flex,
//   IconButton,
//   Input,
//   useEditableControls,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import ItemCategory from "./ItemCategory";

// export default function EditableCategory({
//   id,
//   nameItemCategory,
//   onEditItemCategory,
// }) {
//   function EditableControls() {
//     const {
//       isEditing,
//       getSubmitButtonProps,
//       getCancelButtonProps,
//       getEditButtonProps,
//     } = useEditableControls();

//     return isEditing ? (
//       <ButtonGroup size="sm">
//         <IconButton
//           icon={<CheckIcon/>}
//           onClick={onSubmit}
//         />
//         <IconButton icon={<CloseIcon />} /*{...getCancelButtonProps()}*/ />
//       </ButtonGroup>
//     ) : (
//       <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
//     );
//   }

//   const [itemCategory, setItemCategory] = useState({
//     _id: id,
//     _nameItemCategory: nameItemCategory,
//   });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await onEditItemCategory(itemCategory); // Вызываем onEditItemCategory
//     setItemCategory({
//       // Обновляем состояние после успешного обновления
//       _id: id,
//       _nameItemCategory: itemCategory._nameItemCategory,
//     });
//   };

//   return (
//     <div className="flex items-center">
//       <Editable
//         fontSize={30}
//         mt={5}
//         mb={2}
//         ml={2}
//         textAlign="start"
//         defaultValue={itemCategory._nameItemCategory}
//         isPreviewFocusable={false}
//       >
//         <EditablePreview />
//         <Input
//           fontSize={30}
//           as={EditableInput}
//           onChange={(e) =>
//             setItemCategory({
//               ...itemCategory,
//               _nameItemCategory: e.target.value,
//             })
//           }
//         />
//         <EditableControls />
//       </Editable>
//     </div>
//   );
// }
