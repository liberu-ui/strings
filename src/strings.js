const regEx = new RegExp(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

const snake = string => {
    return string.match(this.regEx)
        .map(word => word.toLowerCase())
        .join('_');
}

const slug = (string, slug = '-') => {
    return string.match(this.regEx)
        .map(word => word.toLowerCase())
        .join(slug);
}


const pascal = string => {
    return string.match(this.regEx)
        .map(word => word.toUpperCase())
        .join('');
}

const camel = string => {
    string = pascal(string);

    return string.charAt(0).toLowerCase() +  string.slice(1); 
}

export default { snake, slug, pascal, camel };