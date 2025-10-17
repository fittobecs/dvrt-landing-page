import Image from "next/image"

const DVRTInfo_certificate = () => {
  return (
    <div
      id="certificate"
      className="w-full py-16 flex flex-col justify-center items-center "
    >
      <div className="w-[85%]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            DVRT 자격증
          </h1>
        </div>
        <div className="w-full flex mt-10 shadow-lg md:flex-row flex-col">
          <div className="md:w-[45%] h-80 relative">
            <Image
              src="/images/dvrt_certi_1.png"
              fill={true}
              alt="DVRT 자격증 과정"
              className="object-fill"
            />
          </div>
          <div className="md:h-80 gap-x-4 text-center flex flex-col justify-center items-center p-5 md:w-[55%]">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              DVRT L1
            </h2>
            <p className="text-left text-lg md:text-xl font-semibold text-gray-800 leading-tight">
              실기 + 필기 통과시 자격증 발급
            </p>
            <p className="text-left text-lg text-[14px]  text-gray-800 mb-4 leading-tight">
              (현장 성공 or 3개월 안에 테스트 영상 촬영 제출)
            </p>
            <ul className="text-left text-base text-gray-500 leading-loose list-disc list-inside">
              <li>온라인 객관식 시험</li>
              <li>필기 시험 총 20문항</li>
              <li>점수 80점 이상</li>
              <li>실기 : 클랜 앤 프레스 5분 50회</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex mt-10 shadow-lg md:flex-row flex-col">
          <div className="md:w-[45%] h-80 relative">
            <Image
              src="/images/dvrt_certi_3.png"
              fill={true}
              alt="DVRT 자격증 과정"
              className="object-fill"
            />
          </div>
          <div className="md:h-80 gap-x-4 text-center flex flex-col justify-center items-center p-5 md:w-[55%]">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              DVRT L2
            </h2>
            <p className="text-left text-lg md:text-xl font-semibold text-gray-800 leading-tight mb-4">
              필기 통과시 자격증 발급
            </p>
            <ul className="text-left text-base text-gray-500 leading-loose list-disc list-inside">
              <li>온라인 객관식 시험</li>
              <li>필기 시험 총 20문항</li>
              <li>점수 80점 이상</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex mt-10 shadow-lg md:flex-row flex-col">
          <div className="md:w-[45%] h-80 relative">
            <Image
              src="/images/dvrt_certi_2.png"
              fill={true}
              alt="DVRT 자격증 과정"
              className="md:object-fill"
            />
          </div>
          <div className="md:h-80 gap-x-4 text-center flex flex-col justify-center items-center p-5 md:w-[55%]">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              DVRT RESTORATION
            </h2>
            <p className="text-left text-lg md:text-xl font-semibold text-gray-800 leading-tight mb-4">
              필기 통과시 자격증 발급
            </p>
            <ul className="text-left text-base text-gray-500 leading-loose list-disc list-inside">
              <li>온라인 객관식 시험</li>
              <li>필기 시험 총 20문항</li>
              <li>점수 80점 이상</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DVRTInfo_certificate
