// import axios from "axios";
// import React, { useState } from "react";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const handleClick = () => {
//     try {
//       axios
//         .post("http://8000/api/user", {
//           name,
//           email,
//           address,
//           password,
//         })
//         .then((res) => {
//           console.log(res.data);
//         });
//       setName("");
//       setEmail("");
//       setAddress("");
//       setPassword("");
//     } catch (error) {
//       console.log("having Error On Sending Data", error.message);
//     }
//   };
//   return (
//     <div className="max-w-[800px] m-auto mt-20">
//       <div class="mt-7 bg-green-800 border border-gray-200 rounded-xl shadow-sm ">
//         <div class="p-4 sm:p-7">
//           <div class="mt-5">
//             <form>
//               <div class="grid gap-y-4">
//                 <div className="text-center">
//                   <h1 class="block text-4xl font-bold text-gray-800 dark:text-white">
//                     Sign up
//                   </h1>
//                 </div>
//                 <div>
//                   <label htmlFor="name" class="block text-sm mb-2 dark:text-white">
//                     Name
//                   </label>
//                   <div class="relative">
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
//                       required
//                       aria-describedby="email-error"
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                     <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
//                       <svg
//                         class="size-5 text-red-500"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         viewBox="0 0 16 16"
//                         aria-hidden="true"
//                       >
//                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="email" class="block text-sm mb-2 dark:text-white">
//                     Email
//                   </label>
//                   <div class="relative">
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
//                       required
//                       aria-describedby="email-error"
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
//                       <svg
//                         class="size-5 text-red-500"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         viewBox="0 0 16 16"
//                         aria-hidden="true"
//                       >
//                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                       </svg>
//                     </div>
//                   </div>
//                   <p class="hidden text-xs text-red-600 mt-2" id="email-error">
//                     Please include a valid email address so we can get back to
//                     you
//                   </p>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="address"
//                     class="block text-sm mb-2 dark:text-white"
//                   >
//                     Full Address
//                   </label>
//                   <div class="relative">
//                     <input
//                       type="text"
//                       id="text"
//                       name="text"
//                       class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
//                       required
//                       aria-describedby="address-error"
//                       onChange={(e) => setAddress(e.target.value)}
//                     />
//                     <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
//                       <svg
//                         class="size-5 text-red-500"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         viewBox="0 0 16 16"
//                         aria-hidden="true"
//                       >
//                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="password"
//                     class="block text-sm mb-2 dark:text-white"
//                   >
//                     Password
//                   </label>
//                   <div class="relative">
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
//                       required
//                       aria-describedby="confirm-password-error"
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
//                       <svg
//                         class="size-5 text-red-500"
//                         width="16"
//                         height="16"
//                         fill="currentColor"
//                         viewBox="0 0 16 16"
//                         aria-hidden="true"
//                       >
//                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   onClick={handleClick}
//                   class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none mt-10"
//                 >
//                   Sign up
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/user", {
        name,
        email,
        address,
        password,
      });
      console.log(response.data);
      setName("");
      setEmail("");
      setAddress("");
      setPassword("");
    } catch (error) {
      console.log("Error Post Req", error);
    }
  };

  return (
    <div className="max-w-[800px] m-auto mt-20">
      <div className="mt-7 bg-green-800 border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div className="text-center">
                  <h1 className="block text-4xl font-bold text-gray-800 dark:text-white">
                    Sign up
                  </h1>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="name-error"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="email-error"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Full Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="address-error"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="password-error"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none mt-10"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
