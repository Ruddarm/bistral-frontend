import { OrderListProvider } from "../../hooks/Order/OrderListContext";
import MainLayout from "../../layouts/MainLayout";
import OrderLayout from "../../layouts/OrderLayout";



function  OrderPage(){
    return(
        <MainLayout>
            <OrderListProvider>
                <OrderLayout></OrderLayout>
            </OrderListProvider>
        </MainLayout>
    )
}

export default OrderPage;