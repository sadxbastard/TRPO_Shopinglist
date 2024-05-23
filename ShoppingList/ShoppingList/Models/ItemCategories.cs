using System.Collections.Generic;

namespace ShoppingList.Models
{
    public class  ItemCategory
    {
        public ItemCategory()
        {
            Id = Guid.NewGuid();
            NameItemCategory = string.Empty;
            Items = new List<Item>();
        }

        public ItemCategory(string nameItemCategory, List<Item>? items)
        {
            Id = Guid.NewGuid();
            NameItemCategory = nameItemCategory;
            Items = items ?? new List<Item>();
        }

        public Guid Id { get; private set; }

        public string NameItemCategory { get; set; }

        public List<Item> Items { get; set; }
    }
}
