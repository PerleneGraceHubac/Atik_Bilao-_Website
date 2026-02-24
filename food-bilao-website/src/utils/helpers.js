export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};

export const filterMenuItems = (items, searchTerm) => {
    return items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
};