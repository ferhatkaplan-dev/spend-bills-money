import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSpending } from "../redux/spendMoney/spendMoneySlice";
import { formatCurrency, removeFirstCharIfZero } from "../utils/utils";
import classNames from "classnames";

const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleChangeBuy = (e) => {
    const inputAmount = e.target.value || "0";
    const sanitizedAmount = removeFirstCharIfZero(inputAmount);
    setAmount(sanitizedAmount);
    dispatch(addSpending({ ...product, amount: parseInt(sanitizedAmount) }));
  };

  const handleBuySellClick = (increment) => {
    let newAmount = parseInt(amount) + increment;
    if (newAmount >= 0) {
      setAmount(newAmount);
      dispatch(addSpending({ ...product, amount: newAmount }));
    }
  };

  return (
    <div className="bg-white p-4 flex flex-col items-center justify-between space-y-8">
      <div className="flex flex-col justify-between items-center space-y-4 flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-32 w-auto hover:scale-110 duration-300"
        />
        <div className="text-center">
          <h2 className="font-bold text-2xl">{product.name}</h2>
          <p className="text-xl font-medium text-emerald-500">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => handleBuySellClick(-1)}
          className={classNames({
            "py-2 px-8 rounded-sm font-medium bg-slate-100 w-1/3 ": true,
            "!bg-red-500 text-white": amount > 0,
          })}
        >
          Sell
        </button>
        <div className="w-1/3">
          <input
            min={0}
            value={amount}
            onChange={(e) => handleChangeBuy(e)}
            type="number"
            className="appearance-none border border-slate-400 rounded-sm w-full text-center h-full"
          />
        </div>
        <button
          onClick={() => handleBuySellClick(1)}
          className="py-2 px-8 rounded-sm bg-slate-100 bg-color-primary text-white font-medium w-1/3"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
