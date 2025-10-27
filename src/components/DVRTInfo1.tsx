const DBRTInfo1: React.FC = () => {
  return (
    <div id="features" className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            샌드백 펑셔널 트레이닝 DVRT
          </h1>
          <h2 className="text-1xl md:text-2xl font-bold text-gray-800 mb-8 leading-tight">
            불안정성이 안정성을 만듭니다.
          </h2>
          <h2 className="text-2xl font-bold text-gray-700 max-w-2xl mx-auto">
            DVRT (Dynamic Variable Resistance Training) 시스템
          </h2>
        </div>
        <div className="w-full aspect-video mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/mSddwITksLA"
            title="DVRT L1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Mobile Content Sections */}
        <div className="space-y-8 text-center">
          {/* First Section */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              DVRT는 정적이지 않은 웨이트를 사용하는 기능성 트레이닝으로
              <br />
              <span className="font-bold">
                역동적이고 다양성이 넘치는 저항 훈련 시스템입니다.
              </span>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              얼티밋 샌드백이라는 독특한 부하를 사용하여 부하 포지션, 신체
              포지션, 부하 자체 등 DVRT는 특유의 안정성 변수를 다루는 것을 통해
              <span className="font-bold">
                효과적으로 동작의 퀄리티를 향상시키는 시스템의 기본 원칙
              </span>
              을 배울 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DBRTInfo1
