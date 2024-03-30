export const Search = (data, searchQuery) => {
    // Check if data is defined and not undefined before using filter
    if (data && Array.isArray(data)) {
        const searchedData = data.filter(element => {
            return element.username.includes(searchQuery);
        });
        return searchedData;
    } else {
        // Handle the case when data is undefined or not an array
        return [];
    }
}
