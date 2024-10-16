import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { inputFields } from "../../constants/inputFields";
import InputField from "./InputField";
export default function CreateAccountItem() {
  const [massage, setMassage] = useState();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function handleSubmit(e) {
    e.preventdefault();
    console.log(formData);
  }
  function handleForm() {
    if (Object.values(formData).some((value) => value === "")) {
      setMassage("Please fill in all fields");
    } else if (formData.password !== formData.confirmPassword) {
      setMassage("Passwords do not match");
    } else {
      setMassage("Account created successfully");
    }
  }
  const notify = () => {
    handleForm();
    toast(massage);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl text-white font-bold">Create Account</h2>
        <p className="text-white/80">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
      </div>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        {inputFields.map((field) => {
          return (
            <InputField
              key={field.name}
              icon={field.icon}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) =>
                handleChange({
                  target: { name: field.name, value: e.target.value },
                })
              }
            />
          );
        })}
        <div>
          <Link to="/CreateAccount">
            <button className="button" type="submit" onClick={notify}>
              Create Account
            </button>
          </Link>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
