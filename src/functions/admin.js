import axios from "axios";

export const getOrders = async(authToken) =>
await axios.get(`${process.env.REACT_APP_API}/admin/orders`,{
    headers: {
        'Access-Control-Allow-Origin': '*',

        authToken
    }
});

export const orderStatusUpdate = async(orderId,orderStatus,authToken) =>
await axios.put(`${process.env.REACT_APP_API}/admin/order-status`,
{orderId,orderStatus},
{
    headers: {
        'Access-Control-Allow-Origin': '*',

        authToken
    }
});