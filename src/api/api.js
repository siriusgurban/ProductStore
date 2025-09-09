const endpoint = {
    get_products: "/products", 
};
const $api = (key)=>{
return import.meta.env.VITE_BASE_URL + endpoint[key];
};

export default $api;