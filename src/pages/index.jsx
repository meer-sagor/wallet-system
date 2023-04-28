import { AddDrawer } from '@/components/Account/AddDrawer';
import { useEffect, useState } from 'react';
import { AccountList } from '@/components/Account/List';
import Chart from '@/components/Chart';
import { Pagination } from '@/components/Pagination';
import { Table } from '@/components/Table';
import axios from 'axios';

export default function Home() {
  const [showAddAccountDrawer, setShowAddAccountDrawer] = useState(false);
  const [accountList, setAccountList] = useState(null)
  const [totalAmount, setTotalAmount] = useState(0)
  const showAddAccountDrawerHandler = () => {
    setShowAddAccountDrawer(true);
  };
  const closeAddAccountDrawerHandler = () => {
    setShowAddAccountDrawer(false);
  };

  const fetchAllAccount = async () => {
    try {
      const { data } = await axios.get(
        'https://distribution.hishabee.business/api/text/accounts'
      );
      setAccountList(data.data)
      console.log({data});
      setTotalAmount(data.total_amount)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllAccount();
  }, [showAddAccountDrawer]);

  return (
    <>
      {showAddAccountDrawer && (
        <AddDrawer onCloseAddAccountDrawer={closeAddAccountDrawerHandler} />
      )}

      <section className="flex w-full gap-[1.9rem] mt-10">
        <Chart totalAmount={totalAmount}/>
        <div className="">
          <AccountList list={accountList} onShowAddAccountDrawer={showAddAccountDrawerHandler} />
        </div>
      </section>
      <section className="mt-[2.4rem]">
        <Table />
      </section>
      <footer>
        <Pagination />
      </footer>
    </>
  );
}
