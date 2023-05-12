const InputEl = ({ type, placeholder, name, value, setFormObj }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormObj((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <label className="flex flex-col gap-2">
      <span className="tracking-[3px] leading-3 uppercase text-[14px] font-semibold text-[#777] ml-1">
        {name}
      </span>
      <input
        type={type}
        className="h-[50px] rounded-[4px] outline-none p-5 text-[16px] text-[#686868] w-full"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </label>
  );
};

export default InputEl;
