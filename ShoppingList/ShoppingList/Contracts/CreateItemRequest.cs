namespace ShoppingList.Contracts
{
    public record CreateItemRequest(string NameItem, int? Quantity, bool? IsBought, string? NameItemCategory);
}
