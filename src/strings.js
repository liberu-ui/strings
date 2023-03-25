const diff = (first, second) => (first ?? '').split('')
    .filter((char, index) => char !== (second ?? '').charAt(index))
    .join('');

const regEx = new RegExp(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

const valid = string => string !== null
    && typeof string !== 'undefined'
    && string !== '';

const snake = string => (valid(string)
    ? string.match(regEx)?.map(word => word.toLowerCase()).join('_')
    : '');

const slug = (string, slug = '-') => (valid(string) && string.match(regEx)
    ? string.toLowerCase().match(regEx)?.join(slug)
    : '');

const pascal = string => (valid(string)
    ? string.match(regEx)?.map(word => word.toUpperCase()).join('')
    : '');

const lcfirst = string => (valid(string)
    ? string.charAt(0).toLowerCase() + string.slice(1)
    : '');

const lcwords = string => (valid(string)
    ? string.match(regEx)?.map(word => word.toLowerCase()).join(' ')
    : '');

const ucfirst = string => (valid(string)
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : '');

const camel = string => lcfirst(pascal(string));

export {
    diff, snake, slug, pascal, camel, lcfirst, lcwords, ucfirst,
};
