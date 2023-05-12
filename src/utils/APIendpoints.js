import Cookies from "js-cookie";

export const getRequest = async (options, func) => {
  const response = await fetch(options);
  if (response.ok) {
    const data = await response.json();
    func(data.data);
  }
};

export const apiUrl = import.meta.env.VITE_API_SERVER;

export const authRequest = async (url, userData, errFunc, closeModal) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };
  const response = await fetch(url, options);

  if (response.ok) {
    closeModal();
    const data = await response.json();
    console.log(data);
    Cookies.set("jwtToken", data.token);
    errFunc('')
  } else {
    const data = await response.json();
    errFunc(data.message);
  }
};
