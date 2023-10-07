'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={onRent}
          className="
            relative w-12 h-12 rounded-full bg-white transition-all duration-300 z-10 border-[2px] border-neutral-200 
          "
        >
          <div 
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full bg-white w-9 h-9 flex items-center justify-center cursor-pointer z-20 border-[3px] border-blue-500 transition-all duration-300" 
                
            >
          <FiPlus className="text-black"/>
          </div>
        </div>
        <div 
        onClick={toggleOpen}
        className="
          bg-white
          p-4
          md:py-2
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="
      absolute 
      rounded-xl 
      shadow-md
      w-[90vw]
      md:w-full 
      bg-white 
      overflow-hidden 
      right-0 
      top-12 
      text-sm
      z-50   // <-- increase this value
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem 
                  label="My postings" 
                  onClick={() => router.push('/trips')}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="My bookings" 
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="My spaces" 
                  onClick={() => router.push('/properties')}
                />
                <MenuItem 
                  label="Add your space" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;