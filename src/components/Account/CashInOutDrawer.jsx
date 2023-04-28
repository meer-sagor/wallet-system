import Image from 'next/image';
import { Input } from '../common/Input';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AccountType } from '@/enums/AccountType';

export const CashInOutDrawer = ({
  onCloseCashInOutDrawer,
  selectedCashInOutItem,
}) => {
  const [cashInOut, setCashInOut] = useState('');
  const [cashInOutState, setCashInOutState] = useState(0);
  const addAccountHandler = async () => {
    if (!cashInOut.length) {
      return toast.warn('Missing Account !');
    }
    toast.warn('Oops, API not ready');
  };
  return (
    <>
      <div className="fixed inset-0 bg-[#00000066]">
        <div className="flex h-full">
          <div className="w-full"></div>
          <div className="flex flex-col justify-between p-[3.4rem] bg-white w-[50%] h-full">
            <div>
              <div className="flex justify-between">
                <h1 className="text-[2.4rem] font-semibold">Cash In/Out</h1>
                <MdClose
                  size={32}
                  className="cursor-pointer"
                  onClick={() => onCloseCashInOutDrawer()}
                />
              </div>
              <div className="border-b border-[#999] mt-[1rem]"></div>

              <div className="rounded-md w-full bg-crimson p-[.8rem] flex gap-4 items-center my-[2.4rem] ">
                <div className="w-[9rem] bg-white rounded-l-lg p-[1.4rem]">
                  {selectedCashInOutItem.type === AccountType.UPAY && (
                    <Image
                      src={`/images/upay.png`}
                      alt="mony"
                      width={28}
                      height={20}
                    />
                  )}
                  {selectedCashInOutItem.type === AccountType.BKASH && (
                    <Image
                      src={`/images/bkash.png`}
                      alt="mony"
                      width={37}
                      height={20}
                    />
                  )}
                  {selectedCashInOutItem.type === AccountType.NAGAD && (
                    <Image
                      src={`/images/nagad.png`}
                      alt="mony"
                      width={40}
                      height={20}
                    />
                  )}
                  {selectedCashInOutItem.type === AccountType.OTHERS && (
                    <Image
                      src={`/images/others.png`}
                      alt="mony"
                      width={20}
                      height={20}
                    />
                  )}
                  {selectedCashInOutItem.type === AccountType.BANK && (
                    <Image
                      src={`/images/bank.png`}
                      alt="mony"
                      width={20}
                      height={20}
                    />
                  )}
                  {selectedCashInOutItem.type === AccountType.ROCKET && (
                    <Image
                      src={`/images/rocket.png`}
                      alt="mony"
                      width={33}
                      height={20}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <span>{selectedCashInOutItem.account_name}</span>
                  <span className="bg-white rounded-md p-[.4rem]">
                    Balance: ৳ {selectedCashInOutItem.balance}
                  </span>
                </div>
              </div>

              <div className="my-[2.4rem] flex border border-grayLight rounded-md w-[32.8rem] m-auto">
                <div
                  className={`${
                    cashInOutState === 0 && 'bg-black text-white'
                  } w-[16.4rem]  p-[1rem] text-center cursor-pointer`}
                  onClick={() => setCashInOutState(0)}
                >
                  Cash In
                </div>
                <div
                  className={` ${
                    cashInOutState === 1 && 'bg-black text-white'
                  } w-[16.4rem] p-[1rem] text-center cursor-pointer`}
                  onClick={() => setCashInOutState(1)}
                >
                  Cash Out
                </div>
              </div>

              <div>
                <p className="mb-[2.2rem]">
                  Cash in amount
                  <span className="text-[#FF3B30]">*</span>
                </p>

                <div className="relative">
                  <span className="absolute left-6 top-2">৳</span>
                  <Input
                    value={cashInOut}
                    onChange={(e) => setCashInOut(e.target.value)}
                    className={`pl-[2.5rem]`}
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="border-t border-[#999] mb-[1rem] w-full"></div>
              <div className="flex justify-end">
                <div className="flex gap-4">
                  <button
                    className="p-[1rem] border rounded-lg w-[15.6rem]"
                    onClick={() => onCloseCashInOutDrawer()}
                  >
                    Cancel
                  </button>
                  <button
                    className="p-[1rem] bg-black text-white rounded-lg w-[15.6rem]"
                    onClick={addAccountHandler}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
