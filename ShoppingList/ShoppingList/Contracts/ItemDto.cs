namespace ShoppingList.Contracts
{
    public record ItemDto(Guid Id, string NameItem, int Quantity, bool IsBought, Guid ItemCategoryId);
}
