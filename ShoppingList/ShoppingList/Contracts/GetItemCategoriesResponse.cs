using System.Collections.Concurrent;

namespace ShoppingList.Contracts
{
    public record GetItemCategoriesResponse(List<ItemCategoryDto> ItemCategories);
}
