import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 h-[650px] pt-[60px] md:pt-[85px] md:hidden"
    >
      <div className="relative w-full h-full">
        {/* 이미지를 감쌀 컨테이너 */}
        <Image
          src="/images/hero_mobile.png"
          fill
          alt="picture of dvrt"
          className="object-fill min-[451px]:hidden"
        />
        <Image
          src="/images/hero_tablet.png"
          fill
          alt="picture of dvrt tablet"
          className="object-fill max-[450px]:hidden"
        />
      </div>

      {/* 검은 오버레이 (투명도 조절 가능) */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* 오버레이 텍스트 */}
      <div className="absolute flex flex-col justify-center items-center text-center px-4">
        <div className="relative w-24 h-10 md:w-[330px] md:h-[150px]">
          <Image
            src="/images/dvrt-logo.png"
            fill
            alt="DVRT Logo"
            className=""
          />
        </div>
        <p className="text-xl text-white drop-shadow-lg text-left">
          샌드백 펑셔널 트레이닝 시스템 <span>DVRT</span>
        </p>
        <p className="text-xl text-white drop-shadow-lg">
          (Dynamic Variable Resistance Training)
        </p>
      </div>
    </section>
  )
}

export default Hero
