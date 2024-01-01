import store from "../../store"
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../../ui/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const navigate = useNavigation();
  const [withPriority, setWithPriority] = useState(false);
const dispatch=useDispatch();
  const isSubmiting = navigate.state === "submitting";
  const formErrors = useActionData();
  const {userName,status:addressStatus,position,address,error:errorAddress}=useSelector(state=>state.user);

  
  const isLoadingAddress=addressStatus=='loading';
  const cart = useSelector(getCart);
  const totalCartPric=useSelector(getTotalCartPrice);
  const prirityPrice=withPriority?totalCartPric*0.2:0;
  const totalPrice=totalCartPric+prirityPrice;
if(!cart.length) return <EmptyCart/>
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row
        sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input  grow" type="text"  name="customer" defaultValue={userName} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row
        sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" className="input w-full" name="phone" required />
            {formErrors?.phone && <p className="text-xs
            mt-2 text-red-700 bg-red-100 p-2 rounded-md

            ">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row
        sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input 
            className="input w-full"
            type="text"
             name="address"
             defaultValue={address}
             disabled={isLoadingAddress}
              required />
               {addressStatus ==='error' && (<p className="text-xs
            mt-2 text-red-700 bg-red-100 p-2 rounded-md

            ">{errorAddress} error</p>)}
          </div>
         {!position.latitude && !position.longitude && <span className="absolute top-[3px] right-[3px] z-50 md:top-[5px] md:right-[5px] ">
          <Button type="small" disabled={isLoadingAddress} onclick={
(e)=>{
  e.preventDefault();
  dispatch(fetchAddress());}
          }>Your location</Button>
          </span>}

        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
          className="h-6 w-6 accent-yellow-400
          focus:ring-yellow-400
          focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
             onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-semibold" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmiting || isLoadingAddress}
          type="primary">
            {isSubmiting ? "waiting..." : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone = "Please enter your phone number";
  if (Object.keys(errors).length > 0) return errors;
  const neworder = await createOrder(order);
 
  store.dispatch(clearCart());
  return redirect(`/order/${neworder.id}`);
}
export default CreateOrder;
