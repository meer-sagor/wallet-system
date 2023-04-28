import { AccountType } from '@/enums/AccountType';
import { currencyFormate } from '@/utility/currencyFormate';
import Image from 'next/image';

export const AccountItem = ({ accountItem }) => {
  return (
    <>
      <div className={`bg-white rounded-2xl p-4 min-w-[32.8rem] `}>
        {accountItem.type === AccountType.UPAY && (
          <Image src={`/images/upay.png`} alt="mony" width={28} height={20} />
        )}
        {accountItem.type === AccountType.BKASH && (
          <Image src={`/images/bkash.png`} alt="mony" width={37} height={20} />
        )}
        {accountItem.type === AccountType.NAGAD && (
          <Image src={`/images/nagad.png`} alt="mony" width={40} height={20} />
        )}
        {accountItem.type === AccountType.OTHERS && (
          <Image src={`/images/others.png`} alt="mony" width={20} height={20} />
        )}
        {accountItem.type === AccountType.BANK && (
          <Image src={`/images/bank.png`} alt="mony" width={20} height={20} />
        )}
        {accountItem.type === AccountType.ROCKET && (
          <Image src={`/images/rocket.png`} alt="mony" width={33} height={20} />
        )}

        <p className="text-grayLight uppercase">{accountItem.account_name}</p>
        <h3 className="text-[2.4rem]">
          $ {currencyFormate(accountItem.balance)}
        </h3>
      </div>
    </>
  );
};
