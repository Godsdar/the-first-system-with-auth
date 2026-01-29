import styled from "styled-components";
import { useForm } from "react-hook-form";
import { colorsPallete } from "./global-styles";

const StyledForm = styled.form`
  margin: auto;
  margin-top: 25%;
  max-width: 400px;
  padding: 20px;
  background-color: ${colorsPallete.lightPurple};
  border-radius: 8px;

  & input,
  & textarea {
    width: 100%;
    padding: 6px;
    display: block;
    outline: none;
    background-color: ${colorsPallete.purple};
    border: none;
  }

  & textarea {
    margin: 12px auto;
    resize: none;
  }

  button {
    background-color: ${colorsPallete.purple}; 
  }
`;

function Login () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default Login;