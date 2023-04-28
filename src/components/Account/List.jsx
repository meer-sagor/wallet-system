import Image from 'next/image';
import { AccountItem } from './Item';

export const AccountList = ({list, onShowAddAccountDrawer }) => {
  console.log({list});
  return (
    <div className="flex gap-4 flex-wrap">
      {list?.map(ac => <AccountItem key={ac.id} accountItem={ac} />)}
  
      <div
        className={`bg-white rounded-2xl p-4 min-w-[32.8rem] cursor-pointer flex flex-col border border-black border-dashed justify-center items-center`}
        onClick={() => onShowAddAccountDrawer()}
      >
        <span className="block">
          <Image
            src={`/images/add.png`}
            width={20}
            height={20}
            alt="add other payment method icon"
          />
        </span>
        <p className="text-grayLight">add to new account</p>
      </div>
    </div>
  );
}
