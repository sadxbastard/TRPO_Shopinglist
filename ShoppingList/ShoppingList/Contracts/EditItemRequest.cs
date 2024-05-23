namespace ShoppingList.Contracts
{
    public record EditItemRequest(Guid Id, string? nNameItem, int? nQuantity, bool? nIsBought, Guid? nItemCategoryId);
}
