import { useSelector } from "react-redux";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";

function Money() {
  const { money, purchasedItems } = useSelector((state) => state.spendMoney);
  const oldMoneyRef = useRef(money);

  const remainingMoney = purchasedItems.reduce((prev, { amount, price }) => {
    return prev - amount * price;
  }, money);

  useEffect(() => {
    oldMoneyRef.current = remainingMoney;
  }, [remainingMoney]);

  return (
    <section
      id="money"
      className="bg-color-primary max-w-screen-lg mx-auto text-center p-5 sticky top-0 z-10"
    >
      <p className="text-3xl font-bold text-white">
        $<CountUp start={oldMoneyRef.current} end={remainingMoney} />
      </p>
    </section>
  );
}

export default Money;
