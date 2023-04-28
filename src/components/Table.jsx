export const Table = () => {
  return (
    <>
      <div className="bg-white rounded-lg border border-[#CCCCCC]">
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row uppercase text-[#999]">
              <div className="table-cell text-left p-[.7rem] border-b border-[#CCCCCC]">
                Invoice No
              </div>
              <div className="table-cell text-left border-b border-[#CCCCCC]">
                Transaction Type
              </div>
              <div className="table-cell text-left border-b border-[#CCCCCC]">
                Date & Time
              </div>
              <div className="table-cell text-left border-b border-[#CCCCCC]">
                Amount
              </div>
              <div className="table-cell text-left border-b border-[#CCCCCC]">
                Charge
              </div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row bg-green">
              <div className="table-cell p-[.7rem]">Bkash</div>
              <div className="table-cell">Cash in</div>
              <div className="table-cell">Dec 30, 09:42 PM</div>
              <div className="table-cell">৳200</div>
              <div className="table-cell">৳10</div>
            </div>
          </div>
        </div>

        <div className="bg-white text-center p-[.7rem] ">
          <p>Showing 07 of 49 transactions</p>
        </div>
      </div>
    </>
  );
};
