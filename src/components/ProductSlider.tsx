import Image from "next/image"
import { useEffect, useState } from "react"

// 데스크톱용 제품 데이터
const productsDesktop = [
  {
    id: 1,
    name: "얼티밋 샌드백 코어",
    description:
      "근육 발달, 전반적인 힘 강화 및 칼로리 소모에 탁월한 도구입니다.",
    image: "/images/core_big.png",
    feature:
      "무게 조절 가능 범위: 2kg ~ 9kg \n 추천 : DVRT를 처음 배우는 사람, 홈트레이닝, PT샵, 헬스트레이너, \n 젊은 운동선수와 여성 등에게 적합합니다.",
    weights: "초급 약 4.5kg / 중급 약 7kg / 고급 약 9kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1192&cid=113703&",
  },
  {
    id: 2,
    name: "얼티밋 샌드백 파워",
    image: "/images/power_big.png",
    description: "회전 운동 및 복잡한 움직임을 위한 최적의 도구입니다.",
    feature:
      "무게 조절 가능 범위: 9kg ~ 18kg \n추천: 강렬하고 강력한 운동을 원하는 분들, 로테이션 훈련과 복잡한 움직임 훈련이 필요한 \n젊은 운동선수와 부트캠프형 운동을 원하는 분들에게 적합합니다.",
    weights: "초급 약 9kg / 중급 약 14kg / 고급 약 18kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1193&cid=113703&",
  },
  {
    id: 3,
    name: "얼티밋 샌드백 포스",
    image: "/images/force_big.png",
    description:
      "어린 운동선수, 초보자, 그리고 집에서 부담 없이 가볍게 운동하고 싶은 분들에게 안성맞춤입니다.",
    feature:
      "무게 조절 가능 범위 : 9kg ~ 22kg \n추천 : 여성, 초보 남성, 회전 운동 및 Strength USB까지 올라가려는 사람들에게 적합합니다.",
    weights: "초급 약 13kg / 중급 약 18kg / 고급 약 22kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=2432&cid=113703&",
  },
  {
    id: 4,
    name: "얼티밋 샌드백 스트렝스",
    image: "/images/strength_big.png",
    description:
      "불안정한 트레이닝의 이점을 제공하며, 다양한 운동에 사용할 수 있는 유연성을 가지고 있습니다.",
    feature:
      "무게 조절 가능 범위: 18kg ~ 36kg \n추천: 스쿼트, 프레스, 로우, 스윙 등을 통한 효과적인 근력 운동을 원하는 분, \n상급자를 위한 시작용 샌드백을 원하는 분들에게 적합합니다.",
    weights: "초급 약 18kg / 중급 약 23kg / 고급 약 27kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1194&cid=113703&",
  },
  {
    id: 5,
    name: "얼티밋 샌드백 벌리",
    image: "/images/burly_big.png",
    description: "무게 조절이 가능한 프리미엄 샌드백입니다.",
    feature:
      "무게 조절 가능 범위: 36kg ~ 54kg \n추천: 중량을 최대로 높여서 강력한 운동을 원하는 사람, \n바벨 타입의 복잡한 리프트를 사용하여 무거운 리프팅 운동을 원하는 분들에게 적합합니다.",
    weights: "초급 약 27kg / 중급 약 36kg / 고급 약 45kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1439&cid=113703&",
  },
]

// 모바일용 제품 데이터 (간략화된 텍스트)
const productsMobile = [
  {
    id: 1,
    name: "얼티밋 샌드백 코어",
    description:
      "근육 발달, 전반적인 힘 강화 및 칼로리 소모에 탁월한 도구입니다.",
    image: "/images/green_sandbag.png",
    feature:
      "스쿼트, 프레스, 로우, 스윙 등을 통한 효과적인 근력 운동을 원하는 분, 상급자를 위한 시작용 샌드백을 원하는 분들에게 적합합니다.",
    weights: "초급 4.5kg / 중급 7kg / 고급 9kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1192&cid=113703&",
  },
  {
    id: 2,
    name: "얼티밋 샌드백 파워",
    image: "/images/power_sandbag.png",
    description: "회전 운동 및 복잡한 움직임을 위한 최적의 도구입니다.",
    feature:
      "강렬하고 강력한 운동을 원하는 분들, 로테이션 훈련과 복잡한 움직임 훈련이 필요한 젊은 운동선수와 부트캠프형 운동을 원하는 분들에게 적합합니다.",
    weights: "초급 9kg / 중급 14kg / 고급 18kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1193&cid=113703&",
  },
  {
    id: 3,
    name: "포스 샌드백",
    image: "/images/orange_sandbag.png",
    description:
      "어린 운동선수, 초보자, 그리고 집에서 부담 없이 가볍게 운동하고 싶은 분들에게 안성맞춤입니다.",
    feature:
      "여성, 초보 남성, 회전 운동 및 Strength USB까지 올라가려는 사람들에게 적합합니다.",
    weights: "초급 13kg / 중급 18kg / 고급 22kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=2432&cid=113703&",
  },
  {
    id: 4,
    name: "얼티밋 샌드백 스트렝스",
    image: "/images/blue_sandbag.png",
    description:
      "불안정한 트레이닝의 이점을 제공하며, 다양한 운동에 사용할 수 있는 유연성을 가지고 있습니다.",
    feature:
      "스쿼트, 프레스, 로우, 스윙 등을 통한 효과적인 근력 운동을 원하는 분,\n상급자를 위한 시작용 샌드백을 원하는 분들에게 적합합니다.",
    weights: "초급 18kg / 중급 23kg / 고급 27kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1194&cid=113703&",
  },
  {
    id: 5,
    name: "얼티밋 샌드백 벌리",
    image: "/images/black_sandbag.png",
    description: "무게 조절이 가능한 프리미엄 샌드백입니다.",
    feature:
      "중량을 최대로 높여서 강력한 운동을 원하는 사람,\n바벨 타입의 복잡한 리프트를 사용하여 무거운 리프팅 운동을 원하는 분들에게 적합합니다.",
    weights: "초급 27kg / 중급 36kg / 고급 45kg",
    link: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1439&cid=113703&",
  },
]

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // 클라이언트 사이드에서만 모바일 감지
  useEffect(() => {
    // window가 정의된 경우에만 실행 (클라이언트 사이드)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 768px)")
      setIsMobile(mediaQuery.matches)

      const handleResize = (e: MediaQueryListEvent) => {
        setIsMobile(e.matches)
      }

      mediaQuery.addEventListener("change", handleResize)
      return () => mediaQuery.removeEventListener("change", handleResize)
    }
  }, [])

  // 모바일 여부에 따라 products 선택
  const products = isMobile ? productsMobile : productsDesktop

  // products 배열 변경 시 currentIndex 유효성 확인
  useEffect(() => {
    if (currentIndex >= products.length) {
      setCurrentIndex(0) // 배열 길이를 초과하면 첫 번째 인덱스로 리셋
    }
  }, [isMobile, products.length, currentIndex])

  const currentProduct = products[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative md:w-[850px]">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* 이미지 영역: 고정 크기 */}
          <div className="relative w-full h-[300px] md:h-[400px]">
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
          <div className="bg-gray-100 p-6 md:h-[440px]">
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
              <span className=" px-1">
                {isMobile ? "추천대상" : "주요특징"}
              </span>
            </h3>
            <p
              className="text-gray-700 mb-5 md:mb-7"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {currentProduct.feature}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              <span className=" px-1">권장무게</span>
            </h3>
            <p className="text-gray-700 mb-5">{currentProduct.weights}</p>

            <div className="mt-9">
              <a
                href={currentProduct.link}
                target="_blank"
                className="text-black font-semibold bg-[rgb(239,239,239)] border-4 border-gray-800 hover:bg-gray-300 px-8 py-3 rounded-full transition-colors"
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
