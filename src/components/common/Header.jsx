import Image from 'next/image';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Input } from './Input';

export const Header = () => {
  return (
    <header className=" bg-white py-4">
      <div className="container m-auto flex items-center gap-8 ">
        <div>
          <Image
            src={`/Hishabee_logo.png`}
            alt="company logo"
            width={135}
            height={32}
            priority={true}
          />
        </div>
        <div className="w-[57.5rem] hidden sm:block">
          <Input className={``} />
        </div>
        <div className='hidden sm:block'>
          <div className="flex gap-8 flex-grow">
            <AiOutlineQuestionCircle size={20} />
            <IoMdNotificationsOutline size={20} />
            <div>user info</div>
          </div>
        </div>
      </div>
    </header>
  );
};
