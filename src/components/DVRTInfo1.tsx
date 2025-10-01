const DBRTInfo1: React.FC = () => {
  return (
    <div id="features" className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            샌드백 펑셔널 트레이닝
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            DVRT
          </h1>
          <h2 className="text-1xl md:text-2xl font-bold text-gray-800 mb-8 leading-tight">
            불안정성이 안정성을 만듭니다.
          </h2>
          <h2 className="text-2xl font-bold text-gray-700 max-w-2xl mx-auto underline">
            DVRT (Dynamic Variable Resistance Training) 시스템
          </h2>
        </div>
        {/* Content Sections */}
        <div className="space-y-8 text-center">
          {/* First Section */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              DVRT는 정적이지 않은 웨이트를 사용하는 기능성 트레이닝으로
              역동적이고 다양성이 넘치는 저항 훈련 시스템입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              얼티밋 샌드백이라는 독특한 부하를 사용하여 부하 포지션, 신체
              포지션, 부하 자체 등 DVRT 특유의 안정성 변수를 다루는 것으로
              효과적으로 동작의 퀄리티를 향상시키는 시스템의 기본 원칙을
              배웁니다.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 leading-relaxed m-8">
              DVRT의 4가지 원칙
            </h2>
            <ol className="text-lg text-left text-gray-700 leading-loose">
              <li>1. 특정 근육을 훈련하는 것이 아니라 움직임 자체를 훈련</li>
              <li>
                2. 신체의 위치, 부하 홀딩 방법을 여러 단계로 변화시켜 보다
                버라이어티한 점진적인 과부하를 제공
              </li>
              <li>
                3. DVRT 시스템은 움직임의 단순성과 복잡성이 공존하는 이상적인
                점진적인 프로세스를 제공
              </li>
              <li>
                4. DVRT 시스템은 각 개인이 목표나 능력 레벨에 따라 유연하게 변화
                대응 시킬 수 있음
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DBRTInfo1
