import axios from "axios"


const completePayment = async (paymentReq)=> {
    // console.log(paymentMode)
    const res = await axios.post(`http://localhost:8085/payment/order`,paymentReq);
    return res;
}

export {completePayment}