import { CustomContext } from "../../config/context/Context";
import { useContext } from "react";
import "../../scss/hitSale.scss";
import { useNavigate } from "react-router-dom";

const AddToCartBtn = ({children, product}) => {
    const {addToCart, user} = useContext(CustomContext);
    const navigate = useNavigate("/login");
    
    const handleAddToCart = () => {
        if("id" in user){
            addToCart(product)
        }else{
            navigate("/login")
        }
    };
    return (
    <button onClick={()=>handleAddToCart()} className="card__sizes-btn">
        {user.carts?.some((el) => el.id === product.id) ? (
              <>
                {children + " " + user.carts.find(el => el.id === product.id).count}
              </>
            ) : (
              <>
                {children}
              </>
            )}
    </button>
  )
}

export default AddToCartBtn