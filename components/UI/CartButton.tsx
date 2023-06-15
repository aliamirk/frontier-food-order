import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

interface CartButtonProps {
  className?: string;
}

const CartButton = (props: CartButtonProps) => {
  return (
    <button className={`${classes.button} + ${props.className}`}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className="">Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
