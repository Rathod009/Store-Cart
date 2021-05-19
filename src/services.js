
export const setStorage =  (name, val) => {
    localStorage.setItem(name,val);
}

export const getStorage = (name) => {
    return localStorage.getItem(name);
}