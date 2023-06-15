import Image from "next/image";
import { images } from "../../public/assests";
import foodimage from "../../public/assests/foodcoverimage.jpg";
import Wrapper from "../Wrapper/Wrapper";

const Hero = () => {

    return (
        <Wrapper>
        <Image src={foodimage} alt="Cover Food Image" width={1000} height={100} className="w-[100%] h-[60vh]  md:h-[70vh]  object-fill  "/>
        </Wrapper>
    )
};

export default Hero;
