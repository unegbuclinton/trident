import React from 'react'
import TdIcon from '../TdIcon/TdIcon'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between rounded-3xl shadow-shadowLight bg-glass-bg px-4 py-2.5'>
      <Image
        alt='logo'
        src={'/logo.png'}
        width={100}
        height={100}
        className='w-[66px] h-12'
      />
      <TdIcon iconName='hamburgerIcon' />
    </nav>
  )
}

export default Navbar

/* Frame 4 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: flex-start;
// padding: 0px 16px;
// gap: 10px;

// position: absolute;
// width: 343px;
// height: 70px;
// left: calc(50% - 343px/2);
// top: 60px;

// background: linear-gradient(90deg, rgba(223, 223, 223, 0.04) 0%, rgba(223, 223, 223, 0.1) 38.79%, rgba(223, 223, 223, 0.1) 59.26%, rgba(223, 223, 223, 0.06) 100%);
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 24px;
