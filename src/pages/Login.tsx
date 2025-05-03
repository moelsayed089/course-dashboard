import { useFormik } from "formik";
import Inputs from "../components/ui/Inputs";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (values: LoginProps) => {
    if (values) {
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/");
    }
  };
  const objForm = useFormik<LoginProps>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });
  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div>
        <form onSubmit={objForm.handleSubmit}>
          <Inputs
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            value={objForm.values.email}
            onChange={objForm.handleChange}
            error={objForm.errors.email}
            className="md:w-1/2 "
          />
          <Inputs
            id="password"
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={objForm.values.password}
            onChange={objForm.handleChange}
            error={objForm.errors.password}
            className="md:w-1/2 "
          />
          <button
            type="submit"
            className="cursor-pointer bg-indigo-700 px-5 py-2 rounded-md mt-3 text-white hover:bg-indigo-800 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
