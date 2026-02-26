// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import * as yup from "yup";
// import { ErrorMessage } from "@hookform/error-message";

// const Auth = ({ type }) => {
//   const schemaReg = yup.object().shape({
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required")
//       .matches(
//         /(?=.*\d)(?=.*[A-Z])(?=.*\W).*/,
//         "Password must contain at least one digit, uppercase letter, and special character"
//       ),
//   });

//   const schemaLog = yup.object().shape({
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: yup.string().required("Password is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(type === "login" ? schemaLog : schemaReg),
//   });

//   const [errorMessage, setErrorMessage] = useState(null);

//   const onReg = async (data) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       console.log(userCredential.user); // Handle successful registration
//     } catch (error) {
//       console.error(error.message); // Handle registration errors
//     }
//   };

//   const onLog = async (data) => {
//     try {
//       setErrorMessage(null);
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       console.log(userCredential.user); // Handle successful registration
//     } catch (error) {
//       // Handle Firebase errors and display user-friendly messages
//       if (error) {
//         setErrorMessage("Incorrect email or password");
//       }
//     }
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(type === "login" ? onLog : onReg)}
//         className="flex flex-col justify-center items-center gap-10"
//       >
//         <div className="flex flex-col gap-3 items-center">
//           <input
//             className="border border-black rounded-lg px-5"
//             type="email"
//             placeholder="Email"
//             {...register("email")}
//           />
//           <ErrorMessage
//             errors={errors}
//             name="email"
//             as="span"
//             className="text-red-600"
//           />
//         </div>
//         <div className="flex flex-col gap-3 items-center">
//           <input
//             className="border border-black rounded-lg px-5"
//             type="password"
//             placeholder="Password"
//             {...register("password")}
//           />
//           <ErrorMessage
//             errors={errors}
//             name="password"
//             as="span"
//             className="text-red-600"
//           />
//         </div>
//         <span className="text-red-600 duration-300">{errorMessage}</span>
//         <button className="bg-amber-300 rounded-full py-3 px-7" type="submit">
//           {type === "login" ? "Login" : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Auth;
