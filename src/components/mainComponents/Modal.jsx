import { useState, useRef } from "react";
import { authRequest, apiUrl } from "../../utils/APIendpoints";
const Modal = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [activeModal, setActiveModal] = useState('login')
  const [err, setErr] = useState(null);
  const modalEl = useRef(null);

  const closeModal = () => {
    modalEl.current.setAttribute("data-close", "");
    modalEl.current.addEventListener(
      "animationend",
      () => {
        modalEl.current.removeAttribute("data-close");
        modalEl.current.close();
      },
      { once: true }
    );
  };

  console.log(err)

  const handleLogin = async (e) => {
    e.preventDefault();
    await authRequest(`${apiUrl}users/login`, loginForm, setErr, closeModal)
    if(err!==''){
      setLoginForm((prev)=>({...prev, password:''}))
    }
  };


  const LoginComp = ()=>{
    return(
      <form className="login-form space-y-6" onSubmit={handleLogin} method="dialog">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          className={`text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-0`}
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          placeholder="••••••••"
          className={`bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-0 ${err!=="" && 'border-[#e63232]'}`}
          required
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button className="text-sm text-blue-700 hover:underline dark:text-blue-500">
          Forget Password?
        </button>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-[#179771] rounded-lg text-sm px-5 py-2.5 text-center font-semibold"
      >
        Login to your account
      </button>
    </form>
    )
  }
  const SingUpComp=()=>{
    return(
      <div>

      </div>
    )
  }

  return (
    <>
      <button className={`login-btn`} onClick={() => modalEl.current.showModal()}>
        Login
      </button>
      <dialog ref={modalEl} className="modal rounded-lg shadow dark:bg-[#37423f]">
        <button
          onClick={closeModal}
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white uppercase">
            {activeModal==='login'?'login':'SIGN-UP'} to Aventour
          </h3>
          {activeModal==='login'?<LoginComp/>:<SingUpComp/>}
            <div className="text-[12px] md:text-[14px] font-medium text-gray-500 dark:text-gray-300 mt-6">
              {activeModal==='login'?'Not registered?':'Already have an account?'}
              <button className="text-blue-700 hover:underline dark:text-blue-500 ml-1" onClick={()=>setActiveModal(activeModal==='login'?'signup':'login')}>
                {activeModal==='login'?'Login':'Create account'}
              </button>
            </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
