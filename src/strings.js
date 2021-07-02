const diff = (first, second) => first.split('')
    .filter((char, index) => char !== second.charAt(index))
    .join('');

const regEx = new RegExp(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

const snake = string => string
    ? string.match(regEx)
        .map(word => word.toLowerCase())
        .join('_')
    : '';

const slug = (string, slug = '-') => string
    ? string.toLowerCase()
        .match(regEx)
        .join(slug)
    : '';

const pascal = string => string
    ? string.match(regEx)
        .map(word => word.toUpperCase())
        .join('')
    : '';

const camel = string => lcfirst(pascal(string));

const lcfirst = string => string
    ? string.charAt(0).toLowerCase() + string.slice(1)
    : '';

const lcwords = string => string
    ? string.match(regEx)
        .map(word => word.toLowerCase())
        .join(' ')
    : '';

const ucfirst = string => string
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : '';

export {
    diff, snake, slug, pascal, camel, lcfirst, lcwords, ucfirst,
};
