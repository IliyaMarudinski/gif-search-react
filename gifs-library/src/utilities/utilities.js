import dot from 'dot-object'

export const reshape = (response, model) => {
    return Object.keys(model).reduce((acc, key) => dot.copy(key, model[key], response, acc), {});
  };

export const capitalize = s => {
    return s && s[0].toUpperCase() + s.slice(1);
}