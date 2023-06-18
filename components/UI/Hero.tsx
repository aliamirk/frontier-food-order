import Image from "next/image";
import foodimage from "../../public/assests/foodcoverimage.jpg";
import Wrapper from "../Containers/Wrapper";
import FoodText from "./FoodText";

const Hero = () => {
  return (
    <Wrapper>
      <Image
        src={foodimage}
        alt="Cover Food Image"
        width={1000}
        height={100}
        className="w-[100%] h-[60vh]  md:h-[70vh"
      />
      <div className="flex justify-center">
        <FoodText />
      </div>
      {/* <div className="max-w-6xl mt-[-250px] text-2xl md:mt-[-350px] mx-auto text-center md:text-4xl font-semibold text-slate-400 ">
        Frontier is the ultimate destination for food enthusiasts, offering a diverse array of cuisines and flavors from around the world
        </div> */}
    </Wrapper>
  );
};

export default Hero;
