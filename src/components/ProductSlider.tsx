import Image from "next/image"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "얼티밋 샌드백 코어",
    description:
      "Ultimate Sandbag Core Package(USB)는 내구성이 뛰어나고 청소가 쉬운 외부 쉘과 정교하게 제작된 9kg 필러 백 1개로 구성되어 있습니다.",
    image: "/images/green_sandbag.png",
    feature:
      "크기: 길이 19인치, 너비 7인치 \n 무게 조절 가능 범위: 2kg ~ 9kg \n 추천 : DVRT를 처음 배우는 사람, 홈트레이닝, PT샵, 헬스트레이너, \n 젊은 운동선수와 여성 등에게 적합합니다.",
    weights: "초급 약 4.5kg / 중급 약 7kg / 고급 약 9kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1192&cid=113703&",
  },
  {
    id: 2,
    name: "얼티밋 샌드백 파워",
    image: "/images/power_sandbag.png",
    description:
      "Ultimate Sandbag Power Package는 외부 쉘과 9kg ~ 18kg 필러 백 2개로 구성되어 있습니다. \n회전 운동 및 복잡한 움직임을 위한 최적의 도구입니다.",
    feature:
      "크기: 길이 48cm, 폭 23cm 무게 조절 가능 \n범위: 9kg ~ 18kg \n추천: 강렬하고 강력한 운동을 원하는 분들, 로테이션 훈련과 복잡한 움직임 훈련이 필요한 \n젊은 운동선수와 부트캠프형 운동을 원하는 분들에게 적합합니다.",
    weights: "초급 약 9kg / 중급 약 14kg / 고급 약 18kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1193&cid=113703&",
  },
  {
    id: 3,
    name: "얼티밋 샌드백 포스",
    image: "/images/orange_sandbag.png",
    description:
      "어린 운동선수, 초보자, 그리고 집에서 부담 없이 가볍게 운동하고 싶은 분들에게 안성맞춤입니다.",
    feature:
      "크기 : 길이 68cm, 폭 20cm \n무게 조절 가능 범위 : 9kg ~ 22kg \n모래주머니(필러) : 1개 (20~50 파운드) \n색상 : 블랙 + 오렌지 레이블 \n추천 : 여성, 초보 남성, 회전 운동 및 Strength USB까지 올라가려는 사람들에게 적합합니다.",
    weights: "초급 약 13kg / 중급 약 18kg / 고급 약 22kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=2432&cid=113703&",
  },
  {
    id: 4,
    name: "얼티밋 샌드백 스트렝스",
    image: "/images/blue_sandbag.png",
    description:
      "Ultimate Sandbag Strength Package는 근육 발달, 전반적인 힘 강화 및 칼로리 소모에 탁월한 도구로 \n필러 백 2개로 구성되어있습니다. \n불안정한 트레이닝의 이점을 제공하며, 다양한 운동에 사용할 수 있는 유연성을 가지고 있습니다",
    feature:
      "크기: 길이 68cm(27인치), 폭 25cm(10인치) \n구성품: 1개의 쉘과 2개의 필러 \n무게 조절 가능 범위: 18kg ~ 36kg \n추천: 스쿼트, 프레스, 로우, 스윙 등을 통한 효과적인 근력 운동을 원하는 분, \n상급자를 위한 시작용 샌드백을 원하는 분들에게 적합합니다.",
    weights: "초급 약 18kg / 중급 약 23kg / 고급 약 27kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1194&cid=113703&",
  },
  {
    id: 5,
    name: "얼티밋 샌드백 벌리",
    image: "/images/black_sandbag.png",
    description:
      "Ultimate Sandbag Burly 패키지는 무게 조절이 가능한 프리미엄 샌드백입니다. \n최고의 내구성을 자랑하는 비마모성 외부 쉘과 세 개의 18킬로그램 필러 백을 포함하고 있습니다.",
    feature:
      "크기: 길이 68.6cm, 폭 33cm \n무게 조절 가능 범위: 36kg ~ 54kg \n추천: 중량을 최대로 높여서 강력한 운동을 원하는 사람, \n바벨 타입의 복잡한 리프트를 사용하여 무거운 리프팅 운동을 원하는 분들에게 적합합니다.",
    weights: "초급 약 27kg / 중급 약 36kg / 고급 약 45kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1439&cid=113703&",
  },
]

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  const currentProduct = products[currentIndex]

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative md:w-[850px]">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* 이미지 영역: 고정 크기 */}
          <div className="relative w-full h-[400px]">
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              className="w-full h-full object-contain"
            />
            {/* 좌우 화살표 버튼 */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-[100%] transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition sm:p-2"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-[100%] transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition sm:p-2"
            >
              →
            </button>
          </div>

          {/* 설명 영역 */}
          <div className="bg-gray-100 p-6 md:h-[530px]">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {currentProduct.name}
            </h2>
            <p
              className="text-gray-700 mb-5 md:mb-7"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {currentProduct.description}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              주요특징
            </h3>
            <p
              className="text-gray-700 mb-5 md:mb-7"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {currentProduct.feature}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              권장무게
            </h3>
            <p className="text-gray-700 mb-5">{currentProduct.weights}</p>

            <div className="mt-9">
              <a
                href={currentProduct.link}
                target="_blank"
                className="text-black font-semibold bg-[rgb(239, 239, 239)] border-4 border-gray-800 hover:bg-gray-300 px-8 py-3 rounded-full transition-colors"
              >
                바로 구매하기
              </a>
            </div>
          </div>
        </div>

        {/* 인디케이터 */}
        <div className="flex justify-center mt-4 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductSlider
