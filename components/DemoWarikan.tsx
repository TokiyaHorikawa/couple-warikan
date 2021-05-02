import { useState, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Button from '@/components/Button';

type Payments = {
  aPayments: { price: number }[];
  bPayments: { price: number }[];
};

export default function DemoWarikan(): JSX.Element {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAPrice, setTotalAPrice] = useState(0);
  const [totalBPrice, setTotalBPrice] = useState(0);

  const { register, control, handleSubmit } = useForm<Payments>({
    defaultValues: {
      aPayments: [{ price: 0 }],
      bPayments: [{ price: 0 }],
    },
  });

  const aFieldArray = useFieldArray({ control, name: 'aPayments' });
  const bFieldArray = useFieldArray({ control, name: 'bPayments' });

  const calcPrice = (data: Payments) => {
    const { aPayments, bPayments } = data;
    const totalA = aPayments.reduce((acc, current) => {
      return acc + Number(current.price);
    }, 0);
    const totalB = bPayments.reduce((acc, current) => {
      return acc + Number(current.price);
    }, 0);
    const total = totalA + totalB;
    setTotalPrice(total);
    setTotalAPrice(totalA);
    setTotalBPrice(totalB);
  };

  const wariPaymentAmount = useMemo(() => totalPrice / 2, [totalPrice]);

  const resultText = useMemo(() => {
    const payer = totalAPrice < totalBPrice ? 'A' : 'B';
    const receiver = payer === 'A' ? 'B' : 'A';
    const paymentAmount =
      wariPaymentAmount - (payer === 'A' ? totalAPrice : totalBPrice);
    return `行動: ${payer}さんが${receiver}さんに${paymentAmount.toLocaleString()}円支払う`;
  }, [totalAPrice, totalBPrice, wariPaymentAmount]);

  return (
    <div className="grid justify-items-center bg-white w-96 p-3">
      <form onSubmit={handleSubmit(calcPrice)}>
        <div className="m-2">
          <h3 className="text-lg ">Aさんが支払った金額</h3>
          <ul>
            {aFieldArray.fields.map((_, index) => (
              <li key={`a-payments-${index}`}>
                <div className="flex m-1">
                  <input
                    type="number"
                    placeholder="金額を入力"
                    {...register(`aPayments.${index}.price` as const)}
                    className="form-input mt-1 block w-32 border-2 border-current"
                  />
                  <span className="ml-2">
                    <Button
                      type="button"
                      onClick={() => aFieldArray.remove(index)}
                      label="削除"
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            onClick={() => aFieldArray.append({ price: 0 })}
            label="追加する"
          />
        </div>
        <div className="m-2">
          <h3>Bさんが支払った金額</h3>
          <ul>
            {bFieldArray.fields.map((_, index) => (
              <li key={`b-payments-${index}`}>
                <div className="flex m-1">
                  <input
                    type="number"
                    {...register(`bPayments.${index}.price` as const)}
                    className="form-input mt-1 block w-32 border-2 border-current"
                  />
                  <span className="ml-2">
                    <Button
                      type="button"
                      onClick={() => bFieldArray.remove(index)}
                      label="削除"
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            onClick={() => bFieldArray.append({ price: 0 })}
            label="追加する"
          />
        </div>
        <div className="grid justify-items-center">
          <input
            type="submit"
            value="計算する"
            className="py-2 px-4 w-full font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
          />
        </div>
      </form>
      {!!totalPrice && (
        <div>
          <h3 className="text-lg">計算結果</h3>
          <p>合計: {totalPrice.toLocaleString()}円</p>
          <p>Aさん合計: {totalAPrice.toLocaleString()}円</p>
          <p>Bさん合計: {totalBPrice.toLocaleString()}円</p>
          <p>割り勘金額/人: {wariPaymentAmount.toLocaleString()}円</p>
          <p className="text-red-500 text-xl">{resultText}</p>
        </div>
      )}
    </div>
  );
}
