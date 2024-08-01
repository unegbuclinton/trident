export const icons: Record<string, React.ReactNode> = {
  hamburgerIcon: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='3' y='4' width='18' height='2' rx='1' fill='white' />
      <rect x='3' y='11' width='18' height='2' rx='1' fill='white' />
      <rect x='3' y='18' width='18' height='2' rx='1' fill='white' />
    </svg>
  ),

  cancelIcon: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='6'
        y='11'
        width='18'
        height='2'
        rx='1'
        transform='rotate(45 12 12)'
        fill='white'
      />
      <rect
        x='6'
        y='11'
        width='18'
        height='2'
        rx='1'
        transform='rotate(-45 12 12)'
        fill='white'
      />
    </svg>
  ),

  minusIocn: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='22'
        y='11'
        width='2'
        height='20'
        rx='1'
        transform='rotate(90 22 11)'
        fill='#D3D5E0'
      />
    </svg>
  ),
  plusIcon: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='5' y='11' width='14' height='2' rx='1' fill='#D3D5E0' />

      <rect x='11' y='5' width='2' height='14' rx='1' fill='#D3D5E0' />
    </svg>
  ),
  instagramIcon: (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='1' y='1' width='48' height='48' rx='24' fill='white' />
      <rect x='1' y='1' width='48' height='48' rx='24' stroke='#E5EDEB' />
      <g clip-path='url(#clip0_594_202)'>
        <path
          d='M30.9999 13H19.0002C15.7005 13 13.0003 15.7002 13.0003 18.9999V31.0001C13.0003 34.2989 15.7005 37 19.0002 37H30.9999C34.2995 37 36.9997 34.2989 36.9997 31.0001V18.9999C36.9997 15.7002 34.2995 13 30.9999 13ZM34.9997 31.0001C34.9997 33.2051 33.206 35 30.9999 35H19.0002C16.7949 35 15.0004 33.2051 15.0004 31.0001V18.9999C15.0004 16.7943 16.7949 15 19.0002 15H30.9999C33.206 15 34.9997 16.7943 34.9997 18.9999V31.0001Z'
          fill='#171001'
        />
        <path
          d='M31.5008 19.9997C32.3292 19.9997 33.0008 19.3281 33.0008 18.4997C33.0008 17.6713 32.3292 16.9998 31.5008 16.9998C30.6724 16.9998 30.0009 17.6713 30.0009 18.4997C30.0009 19.3281 30.6724 19.9997 31.5008 19.9997Z'
          fill='#171001'
        />
        <path
          d='M25 18.9998C21.6857 18.9998 19.0002 21.6856 19.0002 24.9996C19.0002 28.3124 21.6857 31 25 31C28.3134 31 30.9999 28.3124 30.9999 24.9996C30.9999 21.6856 28.3134 18.9998 25 18.9998ZM25 29C22.7912 29 21.0002 27.2091 21.0002 24.9996C21.0002 22.7902 22.7912 20.9998 25 20.9998C27.2089 20.9998 28.9998 22.7902 28.9998 24.9996C28.9998 27.2091 27.2089 29 25 29Z'
          fill='#171001'
        />
      </g>
      <defs>
        <clipPath id='clip0_594_202'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(13 13)'
          />
        </clipPath>
      </defs>
    </svg>
  ),
  twitterIcon: (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='1' y='1' width='48' height='48' rx='24' fill='white' />
      <rect x='1' y='1' width='48' height='48' rx='24' stroke='#E5EDEB' />
      <g clip-path='url(#clip0_594_214)'>
        <path
          d='M37 17.5585C36.1075 17.95 35.1565 18.2095 34.165 18.3355C35.185 17.7265 35.9635 16.7695 36.3295 15.616C35.3785 16.183 34.3285 16.5835 33.2095 16.807C32.3065 15.8455 31.0195 15.25 29.6155 15.25C26.8915 15.25 24.6985 17.461 24.6985 20.1715C24.6985 20.5615 24.7315 20.9365 24.8125 21.2935C20.722 21.094 17.1025 19.1335 14.671 16.147C14.2465 16.8835 13.9975 17.7265 13.9975 18.634C13.9975 20.338 14.875 21.8485 16.183 22.723C15.3925 22.708 14.617 22.4785 13.96 22.117C13.96 22.132 13.96 22.1515 13.96 22.171C13.96 24.562 15.6655 26.548 17.902 27.0055C17.5015 27.115 17.065 27.1675 16.612 27.1675C16.297 27.1675 15.979 27.1495 15.6805 27.0835C16.318 29.032 18.127 30.4645 20.278 30.511C18.604 31.8205 16.4785 32.6095 14.1775 32.6095C13.774 32.6095 13.387 32.5915 13 32.542C15.1795 33.9475 17.7625 34.75 20.548 34.75C29.602 34.75 34.552 27.25 34.552 20.749C34.552 20.5315 34.5445 20.3215 34.534 20.113C35.5105 19.42 36.331 18.5545 37 17.5585Z'
          fill='#171001'
        />
      </g>
      <defs>
        <clipPath id='clip0_594_214'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(13 13)'
          />
        </clipPath>
      </defs>
    </svg>
  ),
  tiktokIcon: (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='1' y='1' width='48' height='48' rx='24' fill='white' />
      <rect x='1' y='1' width='48' height='48' rx='24' stroke='#E5EDEB' />
      <path
        d='M35.5148 19.019C34.1452 19.019 32.8814 18.5653 31.8666 17.7998C30.7027 16.9223 29.8664 15.6351 29.5711 14.1515C29.497 13.7785 29.4581 13.3993 29.4548 13.019H25.5422V23.7103L25.5375 29.5664C25.5375 31.132 24.518 32.4595 23.1047 32.9264C22.6814 33.0664 22.2355 33.1255 21.7903 33.1008C21.2016 33.0684 20.6498 32.8908 20.1703 32.6039C19.1498 31.9936 18.458 30.8864 18.4392 29.6198C18.4097 27.6403 20.01 26.0264 21.9881 26.0264C22.3786 26.0264 22.7536 26.0901 23.1047 26.2059V22.2333C22.7344 22.1784 22.3575 22.1498 21.9764 22.1498C19.8112 22.1498 17.7862 23.0498 16.3387 24.6712C15.2447 25.8965 14.5884 27.4598 14.4872 29.099C14.3545 31.2525 15.1425 33.2995 16.6706 34.8098C16.8952 35.0315 17.1309 35.2373 17.3775 35.4272C18.6877 36.4354 20.2894 36.982 21.9764 36.982C22.3575 36.982 22.7344 36.9539 23.1047 36.899C24.6806 36.6656 26.1347 35.9442 27.2822 34.8098C28.6922 33.4162 29.4712 31.5661 29.4797 29.5969L29.4595 20.8519C30.1338 21.3719 30.8724 21.8027 31.657 22.1334C32.8847 22.6514 34.1864 22.9139 35.5261 22.9134V19.0181C35.527 19.019 35.5158 19.019 35.5148 19.019Z'
        fill='#171001'
      />
    </svg>
  ),
  facebookIcon: (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='1' y='1' width='48' height='48' rx='24' fill='white' />
      <rect x='1' y='1' width='48' height='48' rx='24' stroke='#E5EDEB' />
      <path
        d='M37 25C37 30.9897 32.6116 35.9542 26.875 36.8542V28.4688H29.6711L30.2031 25H26.875V22.7491C26.875 21.7998 27.34 20.875 28.8306 20.875H30.3438V17.9219C30.3438 17.9219 28.9703 17.6875 27.6573 17.6875C24.9166 17.6875 23.125 19.3488 23.125 22.3563V25H20.0781V28.4688H23.125V36.8542C17.3884 35.9542 13 30.9897 13 25C13 18.3728 18.3728 13 25 13C31.6272 13 37 18.3728 37 25Z'
        fill='#171001'
      />
      <path
        d='M29.6711 28.4688L30.2031 25H26.875V22.749C26.875 21.8 27.3399 20.875 28.8306 20.875H30.3438V17.9219C30.3438 17.9219 28.9705 17.6875 27.6576 17.6875C24.9165 17.6875 23.125 19.3488 23.125 22.3563V25H20.0781V28.4688H23.125V36.8542C23.736 36.95 24.3621 37 25 37C25.6379 37 26.264 36.95 26.875 36.8542V28.4688H29.6711Z'
        fill='white'
      />
    </svg>
  ),
}
