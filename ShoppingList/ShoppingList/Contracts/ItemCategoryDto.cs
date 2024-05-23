using ShoppingList.Models;

namespace ShoppingList.Contracts
{
    public record ItemCategoryDto(Guid Id, string NameItemCategory, List<Item> Items);
}
