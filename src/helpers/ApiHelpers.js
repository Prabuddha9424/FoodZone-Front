import axiosInstance from "../config/axiosInstance.js";

/*********************** admin user API ****************************/
export async function AddAdminUser(data){
    return await axiosInstance.post(`/admin/create`,data);
}
export async function loginAdminUser(data){
    return await axiosInstance.post(`/admin/login`,data);
}
export async function passwordReset(data){
    return await axiosInstance.post(`/admin/reset-password`,data);
}
export async function getAllAdminUsers(){
    return await axiosInstance.get(`/admin/find-all`);
}
export async function updateAdminUsers(id,data){
    return await axiosInstance.put(`/admin/update/${id}`,data);
}
export async function deleteAdminUsers(id){
    return await axiosInstance.delete(`/admin/delete-by-id/${id}`);
}

/*********************** customer API ****************************/
export async function AddCustomer(data){
    return await axiosInstance.post(`/customers/create`,data);
}
export async function loginCustomer(data){
    return await axiosInstance.post(`/customers/login`,data);
}
export async function getAllCustomers(){
    return await axiosInstance.get(`/customers/find-all`);
}
export async function deleteCustomers(id){
    return await axiosInstance.delete(`/customers/delete-by-id/${id}`);
}
export async function countAllCustomers(){
    return await axiosInstance.get(`/customers/count-all`);
}
/*********************** Food Items API ****************************/
export async function AddProduct(data){
    return await axiosInstance.post(`/products/create`,data);
}
export async function getAllProducts(){
    return await axiosInstance.get(`/products/find-all`);
}
export async function getAllBeverages(){
    return await axiosInstance.get(`/products/beverage`);
}
export async function getAllSetItems(){
    return await axiosInstance.get(`/products/set-menu`);
}
export async function getAllDeserts(){
    return await axiosInstance.get(`/products/desert`);
}
export async function getAllFiltered1(){
    return await axiosInstance.get(`/products/all-filter1`);
}
export async function getAllFiltered2(){
    return await axiosInstance.get(`/products/all-filter2`);
}
export async function getAllFiltered3(){
    return await axiosInstance.get(`/products/all-filter3`);
}
export async function deleteProduct(id){
    return await axiosInstance.delete(`/products/delete-by-id/${id}`);
}
export async function updateProduct(id,data){
    return await axiosInstance.put(`/products/update/${id}`,data);
}
export async function countAllProducts(){
    return await axiosInstance.get(`/products/count-all`);
}
/*********************** Orders API ****************************/
export async function addOrder(data){
    return await axiosInstance.post(`/orders/create`,data);
}
export async function getAllOrders(){
    return await axiosInstance.get(`/orders/find-all`);
}
export async function deleteOrder(id){
    return await axiosInstance.delete(`/orders/delete-by-id/${id}`);
}
export async function updateOrder(id,data){
    return await axiosInstance.put(`/orders/update/${id}`,data);
}
export async function countAllProcessingOrders(){
    return await axiosInstance.get(`/orders/count-all/processing`);
}
export async function countAllCompletedOrders(){
    return await axiosInstance.get(`/orders/count-all/completed`);
}
export async function countCustomerOrders(data){
    return await axiosInstance.get(`/orders/count-all/customer?email=${data}&payStatus=0`);
}
export async function getCustomerOrders(data){
    return await axiosInstance.get(`/orders/find-all/customer?email=${data}&payStatus=0`);
}

export async function updateOrderPayStatus(id,data){
    return await axiosInstance.put(`/orders/update/pay-states/${id}`,data);
}