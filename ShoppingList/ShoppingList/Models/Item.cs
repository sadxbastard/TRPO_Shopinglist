using System.Numerics;

namespace ShoppingList.Models
{
    public class Item
    {
        public Item() { }
        public Item(string nameItem, int quantity, bool isBought, Guid? itemCategoryId)
        {
            Id = Guid.NewGuid();
            NameItem = nameItem;
            Quantity = quantity;
            IsBought = isBought;
            ItemCategoryId = itemCategoryId ?? Guid.Empty;
        }

        public Guid Id { get; private set; }

        public string NameItem { get; set; }

        public int Quantity { get; set; }

        public bool IsBought { get; set; }

        public Guid ItemCategoryId { get; set; }

    }
}
