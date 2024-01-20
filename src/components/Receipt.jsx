import { useSelector } from "react-redux";
import { formatCurrency, formatMoney } from "../utils/utils";

function Receipt() {
  const { purchasedItems } = useSelector((state) => state.spendMoney);

  const totalSpend = purchasedItems.reduce((prev, { amount, price }) => {
    return prev + amount * price;
  }, 0);

  return (
    <section className="bg-white max-w-screen-lg mx-auto  flex justify-center">
      <div className="flex w-3/4 md:w-1/2  flex-col space-y-4 p-8">
        <h2 className="font-bold text-3xl text-center">Your Receipt</h2>

        <div className="flex flex-col">
          {purchasedItems.map(({ name, amount, price }, index) => {
            return (
              <div key={index} className="flex justify-between ">
                <span className="font-bold w-2/3">{name}</span>
                <div className="flex justify-between w-1/3">
                  <span className="font-bold">X{amount}</span>
                  <span className="font-bold text-emerald-500">
                    {formatMoney(amount * price)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <hr className="border-black" />
        <div className="flex justify-between">
          <span className="font-bold">TOTAL</span>
          <span className="font-bold text-emerald-500">
            {formatCurrency(totalSpend)}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Receipt;
