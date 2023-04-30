import { useState } from "react";
import Cookies from "js-cookie";
const Form = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const jwtToken = Cookies.get("jwtToken");

    const formData = new FormData();
    formData.append("image", photo);
    const res = await fetch("http://localhost:4000/users/update-details", {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const data = await res.json();
    console.log(data);
    setSending(false);
  };

  return (
    <div className="form-cont">
      <h1 className="h1">FORM</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => {
            setPhoto(e.target.files[0]);
          }}
        />

        <button className="button" type="submit">
          Submit
        </button>
        {sending && <h1>Sending....</h1>}
      </form>
    </div>
  );
};

export default Form;
