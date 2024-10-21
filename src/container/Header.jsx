import React, { useEffect, useState } from "react";

const Header = () => {
    const [navState, setNavState] = useState(false);
  

    // const onCartToggle = () => {
    //     dispatch(setOpenCart({
    //         cartState: true
    //     }))
    // }

    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[]);
    return(
        <div className={
            !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50 overflow-x-hidden' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-[50em] z-[200] blur-effect-theme'
          }>
        <div className=" flex justify-between items-center gap-[40em]">
        <div className=" text-2xl font-bold luk">
            <h2>FakeShop</h2>
         </div>
         <div>
            <ul className=" flex space-x-10 font-bold">
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
         </div>
        </div>
         
        </div>
    )
}
export default Header