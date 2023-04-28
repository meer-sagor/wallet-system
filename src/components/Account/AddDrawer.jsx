import Image from 'next/image';
import { Input } from '../common/Input';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const accountList = [
  {
    id: 1,
    name: 'bKash',
    image: '/images/bkash.png',
  },
  {
    id: 2,
    name: 'Rocket',
    image: '/images/rocket.png',
  },
  {
    id: 3,
    name: 'Nagad',
    image: '/images/nagad.png',
  },
  {
    id: 4,
    name: 'UPAY',
    image: '/images/upay.png',
  },
  {
    id: 5,
    name: 'Back',
    image: '/images/bank.png',
  },
  {
    id: 6,
    name: 'Others',
    image: '/images/others.png',
  },
];

export const AddDrawer = ({ onCloseAddAccountDrawer }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [accountName, setAccountName] = useState('');
  const selectAccountHandler = (account) => {
    setSelectedAccount(account);
  };
  const addAccountHandler = async () => {
    if (!accountName.length) {
      return toast.warn('Missing Account Name !');
    }
    if (accountName.length > 10) {
      return toast.warn('Account name (up to 10 digits)!');
    }
    const payload = {
      account_type: selectedAccount?.name.toUpperCase(), //Must Be UPPER CASE (CASH,BKASH,ROCKET,NAGAD,UPAY,BANK,OTHERS)
      account_name: accountName,
    };
    try {
      const { data } = await axios.post(
        'https://distribution.hishabee.business/api/text/accounts',
        payload
      );
      if (data.success) {
        onCloseAddAccountDrawer();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-[#00000066]">
        <div className="flex h-screen">
          <div className="w-full h-screen"></div>
          <div className="flex flex-col justify-between p-[3.4rem] bg-white w-[50%] h-screen">
            <div>
              <div className="flex justify-between">
                <h1>Add an Account</h1>
                <MdClose
                  size={32}
                  className="cursor-pointer"
                  onClick={() => onCloseAddAccountDrawer()}
                />
              </div>
              <div className="border-b border-[#999] mt-[2.4rem]"></div>
              <div className="my-[2.4rem]">
                <h1 className="mb-[1.2rem]">Select Account</h1>
                <div className="flex gap-[1.2rem] flex-wrap">
                  {accountList.map((account) => (
                    <div
                      key={account.id}
                      className={`bg-[#FAFAFA] rounded-xl p-[2.4rem] flex flex-col justify-between text-center cursor-pointer w-[15.6rem] border-2-transparent  ${
                        selectedAccount?.id === account.id &&
                        '!border-2 border-green'
                      }`}
                      onClick={() => selectAccountHandler(account)}
                    >
                      <Image
                        src={account.image}
                        alt="bkash"
                        width={110}
                        height={54}
                      />
                      <p>{account.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-[2.2rem]">
                  Account name (up to 10 digits){' '}
                  <span className="text-[#FF3B30]">*</span>
                </p>
                <Input
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                />
                <p className="text-[#858585] text-[1.4rem] flex items-center gap-3 mt-[1.2rem]">
                  <span>
                    <AiOutlineExclamationCircle />
                  </span>{' '}
                  Use a name that will be easy to remember
                </p>
              </div>
            </div>

            <div className="self-end">
              <div className="flex gap-4">
                <button
                  className="p-[1rem] border rounded-lg w-[15.6rem]"
                  onClick={() => onCloseAddAccountDrawer()}
                >
                  Cancel
                </button>
                <button
                  className="p-[1rem] bg-black text-white rounded-lg w-[15.6rem]"
                  onClick={addAccountHandler}
                >
                  Add Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
