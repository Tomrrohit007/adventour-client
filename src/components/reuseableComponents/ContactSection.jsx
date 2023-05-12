import {useState} from "react";
import InputEl from "./InputEl"

const ContactSection = () => {
  const [formObj, setFormObj ] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const inputArr = [
    {
      type: "text",
      placeholder: "Enter your name",
      name: "name",
      value: formObj.name,
    },
    {
      type: "email",
      placeholder: "Enter your email",
      name: "email",
      value: formObj.email,
    },
  ];
  
  return (
    <div className="contact-section">
      <div className="image-card">
        <div className="w-full h-full md:w-[50%] relative z-10 flex flex-col justify-center items-center gap-8">
          <h1 className="text-[--h1-color] md:text-[36px] text-[20px] font-semibold tracking-[2px] md:tracking-[5px]">
            SUBSCRIBE OUR LETTER
          </h1>
          <form
            className="flex flex-col items-center gap-10 px-4"
            onSubmit={handleSubmit}
            >
            {inputArr.map(eachItem=>(
              <InputEl {...eachItem} key={eachItem.placeholder} setFormObj={setFormObj} />
            ))}
            <button
              className="submit-btn w-full text-[#e0e0e0] bg-[#707070] p-5 py-3 rounded-md tracking-[3px] font-semibold"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
