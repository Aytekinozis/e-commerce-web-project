const ContentCard = (props) => {
  const { item } = props;

  return (
    <div className="max-w-[359px] object-cover object-center flex flex-col gap-4 items-center font-montserrat shadow hover:scale-105 hover:shadow-2xl my-4">
      <img className="object-cover object-center size-[350px]" src={item} />
      <div className="flex flex-col gap-4 w-10/12 py-4">
        <div className="flex gap-4 text-xs font-normal">
          <p className="text-[#8EC2F2]">Google</p>
          <p className="text-[#737373]">Trending</p>
          <p className="text-[#737373]">New</p>
        </div>
        <h4 className="flex text-xl font-normal">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="flex text-sm text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.99934 14.6667C4.70379 14.6232 2.04278 11.9622 1.99934 8.66668C2.04278 5.37113 4.70379 2.71011 7.99934 2.66668C11.2949 2.71011 13.9559 5.37113 13.9993 8.66668C13.9559 11.9622 11.2949 14.6232 7.99934 14.6667ZM7.99934 4.00001C5.43612 4.03376 3.36642 6.10346 3.33268 8.66668C3.36642 11.2299 5.43612 13.2996 7.99934 13.3333C10.5626 13.2996 12.6323 11.2299 12.666 8.66668C12.6323 6.10346 10.5626 4.03376 7.99934 4.00001ZM11.3327 9.33334H7.33268V5.33334H8.66601V8.00001H11.3327V9.33334ZM13.5273 4.47201L11.5213 2.47201L12.4607 1.52734L14.4673 3.52734L13.5273 4.47134V4.47201ZM2.47068 4.47201L1.52734 3.52734L3.52134 1.52734L4.46468 2.47201L2.47201 4.47201H2.47068Z"
                fill="#23A6F0"
              />
            </svg>
            <p className="text-[#737373]">22 April 2021</p>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_11054_230)">
                <path
                  d="M15.8333 13.8334H1.5V0.833415C1.5 0.741748 1.425 0.666748 1.33333 0.666748H0.166667C0.075 0.666748 0 0.741748 0 0.833415V15.1667C0 15.2584 0.075 15.3334 0.166667 15.3334H15.8333C15.925 15.3334 16 15.2584 16 15.1667V14.0001C16 13.9084 15.925 13.8334 15.8333 13.8334ZM3 12.5001H14.1667C14.2583 12.5001 14.3333 12.4251 14.3333 12.3334V3.25008C14.3333 3.10008 14.1521 3.02716 14.0479 3.13133L9.66667 7.51258L7.05417 4.92925C7.02284 4.89823 6.98054 4.88083 6.93646 4.88083C6.89238 4.88083 6.85007 4.89823 6.81875 4.92925L2.88125 8.87925C2.86596 8.89457 2.85385 8.91277 2.84562 8.93279C2.8374 8.95281 2.83322 8.97427 2.83333 8.99591V12.3334C2.83333 12.4251 2.90833 12.5001 3 12.5001Z"
                  fill="#23856D"
                />
              </g>
              <defs>
                <clipPath id="clip0_11054_230">
                  <rect
                    width="16"
                    height="14.6667"
                    fill="white"
                    transform="translate(0 0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#737373]">10 comments</p>
          </div>
        </div>
        <div>
          <a className="flex gap-2 items-center">
            <p className="text-[#737373]">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
            >
              <g clip-path="url(#clip0_11054_235)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_11054_235">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
