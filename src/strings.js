const diff = (first, second) => first.split('')
    .filter((char, index) => char !== second.charAt(index))
    .join('');

const regEx = new RegExp(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

const snake = string => string.match(regEx)
    .map(word => word.toLowerCase())
    .join('_');

const slug = (string, slug = '-') => string.match(regEx)
    .map(word => word.toLowerCase())
    .join(slug);

const pascal = string => string.match(regEx)
    .map(word => word.toUpperCase())
    .join('');

const camel = string => {
    string = pascal(string);

    return string.charAt(0).toLowerCase() + string.slice(1);
};

const lcwords = string => string.match(regEx)
    .map(word => word.toLowerCase())
    .join(' ');

export {
    diff, snake, slug, pascal, camel, lcwords,
};
