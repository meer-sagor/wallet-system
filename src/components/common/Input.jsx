export const Input = ({ type, onChange, value, className }) => {
  return (
    <>
      <input type={type ? type : 'text'} value={value} onChange={onChange} className={` outline-none px-4 py-2 border border-[#999] rounded-lg w-full ${className}`}/>
    </>
  );
};
