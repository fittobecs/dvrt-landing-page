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
        {/* Content Sections */}
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
              을 배웁니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              기본 원칙에는 4가지가 있습니다.
            </p>
            <ol className="text-lg text-center text-gray-700 leading-loose">
              <li>
                첫 번째, 특정 근육을 훈련하는 것이 아니라 움직임 자체를
                훈련합니다.
              </li>
              <li>
                두 번째, 신체의 위치, 부하 홀딩 방법을 여러 단계로 변화시켜 보다
                버라이어티한 점진적인 과부하를 제공합니다.
              </li>
              <li>
                세 번째, DVRT 시스템은 움직임의 단순성과 복잡성이 공존하는
                이상적인 점진적인 프로세스를 제공합니다.
              </li>
              <li>
                네 번째, DVRT 시스템은 각 개인이 목표나 능력 레벨에 따라
                유연하게 변화 대응 시킬 수 있습니다.
              </li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed">
              이때, DVRT는 얼티밋 샌드백이라는 독특한 불안정성을 주는 부하 툴을
              사용합니다. 수 많은 툴 중 시스템 개발자인 조쉬 헨킨이 시스템
              개발과 동시에 개발 및 개선을 지속해 온 가장 적합한 툴인 얼티밋
              샌드백(USB)를 활용하여 역동적이고 다양성이 넘치는 저항 훈련
              시스템을 진행합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DBRTInfo1
