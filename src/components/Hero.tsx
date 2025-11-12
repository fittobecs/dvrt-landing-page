import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center max-[767px]:hidden pb-0 h-[290px] sm:h-[350px] md:h-[650px] pt-[60px] md:pt-[85px]"
    >
      <div className="relative w-full h-full">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/dvrt_main_no.png"
          fill
          alt="picture of fms-academy-header"
          className="" // 또는 object-contain
        />
      </div>

      {/* 오버레이 텍스트 */}
      <div className="absolute left-1 md:left-11 flex flex-col justify-center items-left text-center px-4">
        <div className="relative w-24 h-10 md:w-[330px] md:h-[150px]">
          <Image
            src="/images/dvrt-logo.png"
            fill
            alt="DVRT Logo"
            className=""
          />
        </div>
        <p className="text-sm sm:text-base md:text-2xl text-white drop-shadow-lg text-left">
          샌드백 펑셔널 트레이닝 시스템 <span>DVRT</span>
        </p>
        <p className="text-sm sm:text-base md:text-2xl text-white drop-shadow-lg">
          (Dynamic Variable Resistance Training)
        </p>
      </div>
    </section>
  )
}

export default Hero
