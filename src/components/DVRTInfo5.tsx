import Image from "next/image"

const DVRTInfo5: React.FC = () => {
  return (
    <section className="w-full py-4 flex justify-center items-center">
      <div className="relative w-[80%] max-w-[1200px]">
        <div
          className="flex flex-col md:flex-row items-center"
          style={{ backgroundColor: "rgb(202, 202, 202)" }}
        >
          {/* 텍스트 영역 */}
          <div className="flex-[4] text-center mr-8 pl-5">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              DVRT RESTORATION
            </h2>
            <p className="text-left text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-tight">
              신체 기능 회복 및 재활 프로그램. 전 연령 사용 가능 강의. 부상
              부위와 정도에 따라 맞춤 적용 가능한 무게 활용 재활, 교정 강의
            </p>
            <ul className="text-left  text-gray-500 leading-loose list-disc list-inside">
              <li>움직임 패턴 교정 리커버리 중심의 강의</li>
              <li>재활 및 교정 트레이너, 물리치료사 대상</li>
              <li>얼티밋 샌드백 활용</li>
            </ul>
            <div className="my-4">
              <a
                className="text-blue-500"
                href="https://www.fittobe.ac/course/course_list.jsp?cid=113696"
                target="_blank"
              >
                상세 페이지 바로 가기
              </a>
            </div>
          </div>
          {/* 이미지 영역 */}
          <div className="flex-[6]">
            <Image
              src="/images/dvrt_girl_1.jpg"
              width={900}
              height={900}
              alt="icons"
              style={{ width: "100%", height: "auto" }}
              className="object-contain"
            />
          </div>
        </div>
        <div className="mt-8 pt-4">
          <div className="flex justify-center items-center w-full">
            <div className="w-fit border-b-2 border-gray-500 py-2 mb-4">
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                통증을 줄이고 운동 능력을 향상시키는 기능적 훈련 시스템.
              </h1>
            </div>
          </div>

          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              움직임 효율성 강조 : 단순히 근육을 키우는 것을 넘어, 신체의 두
              분절 이상을 통합하여 신체 사슬의 기능과 성능을 향상시키는 데
              중점을 둔다.
            </p>
          </div>
          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              점진적 과부하의 다각화 : 무게 추가뿐만 아니라 속도, 운동 범위,
              밀도, 볼륨, 움직임 평면 등 다양한 훈련 변수를 활용하여 신체에
              점진적으로 스트레스를 주며 운동 능력을 개선한다.
            </p>
          </div>
          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              코어 강성 및 안정성 중시 : 척추와 골반의 안정성을 유지하는 코어
              강성을 강조하며, 이를 통해 부상 예방과 퍼포먼스 향상을 도모한다.
            </p>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          {/* 신청 버튼 */}
          <a
            href="https://www.fittobe.ac/course/course_list.jsp?cid=117226&"
            target="_blank"
            className="text-black font-semibold border-4 border-gray-800 hover:bg-gray-300 px-8 py-3 rounded-full transition-colors"
          >
            오프라인 일정 확인하기
          </a>
        </div>
      </div>
    </section>
  )
}

export default DVRTInfo5
