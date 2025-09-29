"use client"
import Image from "next/image"
import ProductSlider from "./ProductSlider"

const DVRTInfo6: React.FC = () => {
  return (
    <section
      id="products"
      className="w-full py-10 flex justify-center items-center"
    >
      <div className="w-[80%] max-w-[1200px] flex flex-col justify-center items-center text-center">
        <p className="font-semibold">*DVRT 온라인 강좌 오픈 예정</p>
        <div className="w-[70%] mt-4 border-4 border-black rounded-lg"></div>
        <Image
          src="/images/DVRT_USB_logo.png"
          width={700}
          height={700}
          alt="DVRT 온라인 강좌 오픈 예정"
          className="object-contain mt-5"
        />
        <h2 className="mt-8 text-3xl font-bold text-gray-800 mb-4 leading-tight">
          ❓얼티밋 샌드백
        </h2>
        <p className="text-xl mb:text-2xl text-gray-700 mb-4">
          DVRT의 기본 컨셉을 케틀벨, 덤벨 등 다양한 타입의 트레이닝 툴에 응용
          가능
        </p>
        <div className="py-2 mb-2 w-[80%]">
          <p className="text-xl mb:text-2xl text-gray-700 text-center">
            수많은 툴 중에서도 시스템 개발자인 조쉬 헨킨이 시스템 개발과 동시에
            개선을 계속한 얼티밋 샌드백(USB)은 DVRT의 컨셉을 적용하기 위해 가장
            적합한 툴입니다.
          </p>
        </div>
        <h2 className="mt-8 text-3xl font-bold text-gray-800 mb-4 leading-tight">
          얼티밋 샌드백 종류
        </h2>
        <ProductSlider />
      </div>
    </section>
  )
}

export default DVRTInfo6
