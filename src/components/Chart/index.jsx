import { currencyFormate } from '@/utility/currencyFormate';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Cash', 'bKash', 'Upay', 'Nagad', 'Rocket'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(51, 133, 255, 1)',
        'rgba(255, 59, 48, 1)',
        'rgba(255, 214, 2, 1)',
        'rgba(253, 132, 30, 1)',
        'rgba(75, 188, 94, 1)',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      // borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
      // labels: {
      //   font: {
      //     size: 12,
      //   },
      // },
      // position: 'bottom'
    },
  },
};
const Chart = ({totalAmount}) => {
  return (
    <div className="bg-white min-w-[37.3rem] rounded-lg p-[3.5rem] flex flex-col self-baseline justify-center items-center">
      <div className="w-[16.3rem]">
        <div className='text-center mb-4'>
          <h3>Total Balance</h3>
          <h1 className='text-[2.4rem] text-black font-semibold'>৳ {currencyFormate(totalAmount)}</h1>
        </div>
        <Doughnut data={data} options={options} />
        <div className="flex flex-wrap justify-center items-center gap-4 text-[1.2rem] mt-4">
          <div className="flex items-center gap-[.8rem]">
            <span className="w-[1.2rem] h-[1.2rem] block bg-[#3385FF] rounded-sm"></span>
            <span>Cash</span>
          </div>
          <div className="flex items-center gap-[.8rem]">
            <span className="w-[1.2rem] h-[1.2rem] block bg-[#FF3B30] rounded-sm"></span>
            <span>bKash</span>
          </div>
          <div className="flex items-center gap-[.8rem]">
            <span className="w-[1.2rem] h-[1.2rem] block bg-[#FFD602] rounded-sm"></span>
            <span>Upay</span>
          </div>
          <div className="flex items-center gap-[.8rem]">
            <span className="w-[1.2rem] h-[1.2rem] block bg-[#FD841E] rounded-sm"></span>
            <span>Nagad</span>
          </div>
          <div className="flex items-center gap-[.8rem]">
            <span className="w-[1.2rem] h-[1.2rem] block bg-[#4BBC5E] rounded-sm"></span>
            <span>Rocket</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
