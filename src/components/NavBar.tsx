import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const NavBar = () => {

  // const handleClicking = () => {
  //   alert('Non functional ')
  // }
  return (

    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/car-dekho.svg"}
            alt="'logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
        title="sign-in"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-red-100 min-w-[130px]"
        // handleClick={() => {}}
        />
      </nav>
    </header>
    
  );
};

export default NavBar;
