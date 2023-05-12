import React ,{useState} from 'react'
import logo from '../public/images/header-logo.png'
import Image from 'next/image'
import Link from "next/link";
import { FaHeart,FaShare } from "react-icons/fa";
import { useRouter } from 'next/router';

const Header = ({props}) => {
  const router = useRouter();
  const fullUri = router.asPath;
  const path =fullUri.split('/')[1]

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <>
      <div>
        <div className='flex justify-around w-full items-center mt-3'>
          <div className='flex flex-col'>
            <div className='bg-black'>
              <Image src={logo} alt='Logo' width={100} height={30}/>
            </div>
          </div>
          <div className='flex justify-center mr-12 w-[40rem]'>
            <div className={`uppercase font-Lato tracking-[1.2px] font-[50px] ml-16 cursor-pointer ${path == 'floorplan' ? 'text-[#BE9F56]' : 'text-[#BE9F56]'}`}> <Link href={`/floorplan/${props}`} passHref>floor plan</Link></div>

          </div>

          <div className='flex items-center'>
            <div className='flex items-center m-2'>
              <div><FaShare className='m-2'/></div>
              <div className='text-black uppercase font-Lato tracking-[1.2px] font-[38px]  ' >SHARE </div>
            </div>
            <div className='flex items-center'>
              <div>
                <button onClick={handleHeartClick}>
                  <FaHeart className="text-red m-2" style={{ color: isHeartClicked ? "red" : "rgba(250,0,0,0.45)" }} />
                </button>
              </div>
              <div className='text-black uppercase font-Lato tracking-[1.2px] font-[38px]  ' >SAVE</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header;
