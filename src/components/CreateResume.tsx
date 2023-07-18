import { Link } from "react-router-dom";

const CreateResume = () => {
    return (
      <div className="grid shadow-2xl place-items-center grid-cols-2 absolute left-0 top-28 w-[100%] h-[50%]">
        <img
          src="../src/assets/apple.jpg"
          alt=""
          className="absolute h-[100%] w-[50%] top-0 right-0 z-[-1]"
        />
        <div className=" absolute top-0 left-0 grid place-items-center w-[50%] h-[100%]">
          <p className="bg-black rounded-md p-10 w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            excepturi quia minima rerum. Sapiente ullam repudiandae corrupti
            voluptas perspiciatis ab vero nostrum, officia repellendus.
            Accusantium illum doloremque saepe optio amet.
          </p>

         
        </div>
      </div>
    );
}

export default CreateResume