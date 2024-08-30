export function createPages(pageNumber , className ) {
    return `<button class="px-2 bg-gray-200 rounded-3xl font-medium ${className}">${pageNumber}</button>`;
}