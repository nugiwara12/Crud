export const Paginate = (data, currentPage, pageSize) => {
    // Check if data is defined and not undefined before using slice
    if (data && Array.isArray(data)) {
        const startIndex = (currentPage - 1) * pageSize;
        return data.slice(startIndex, startIndex + pageSize);
    } else {
        // Handle the case when data is undefined or not an array
        return [];
    }
}
