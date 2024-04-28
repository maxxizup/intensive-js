export function Header (todolistTitle) {
    const container = document.createElement('h1');
    container.append(todolistTitle);
    return container
}