export function firstLetterToUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toPascalCase(string) {
    return string.split(' ')
        .map(str => firstLetterToUpper(str))
        .join(' ');
}