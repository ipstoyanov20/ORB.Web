import { Form } from "react-router-dom";
export const Resumes = () => {
    return (
      <div className="rounded-md absolute right-0 top-0 bg-gray-200 w-[80%] h-[100%]">
        <h1 className="text-black text-xl p-5 pb-0 mt-20 text-left">Your Personal info</h1>
        <Form method="post" className=" pt-0 p-5 w-[45%] h-[50%]">
          <div className="grid grid-rows-4 gap-y-1 rounded-md bg-slate-950 p-5 mt-5 ">
            <label className="text-left" htmlFor="fname">
              First name
            </label>
            <input type="text" name="fname" id="fname" />
            <label className="text-left" htmlFor="lname">
              Last name
            </label>
            <input type="text" name="lname" id="lname" />
          </div>

          <div className="grid grid-cols-2 m-2 p-5">
            <span className="grid grid-rows-2">
              <label className="text-left text-black" htmlFor="email">
                Email
              </label>
              <input className="w-[80%]" type="email" name="email" id="email" />
            </span>
            <span className="grid grid-rows-2">
              <label className="text-left text-black" htmlFor="phone">
                Phone
              </label>
              <input className="w-[50%]" type="tel" name="phone" id="phone" />
            </span>
          </div>

          <div className="grid grid-rows-4 gap-y-1 rounded-md bg-slate-950 p-5 mt-5 ">
            <label className="text-left" htmlFor="address">
              Address
            </label>
            <input type="text" name="address" id="address" />
            <label className="text-left" htmlFor="address">
              City
            </label>
            <input type="text" name="city" id="city" />
          </div>

          <button className="bg-black text-white rounded-md hover:bg-gray-700 hover:cursor-pointer m-5" disabled>
            Create
          </button>

        </Form>
        
        {/* Implement real time rendering */}








      </div>
    );

}