using ShoppingList.Models;

namespace ShoppingList.Contracts
{
    public record CreateItemCategoryRequest(string NameItemCategory, List<Item>? Items);
}
