import Image from "next/image"

const DVRTInfo4: React.FC = () => {
  return (
    <section className="w-full py-4 flex justify-center items-center">
      <div className="relative w-[80%] max-w-[1200px]">
        <div
          className="flex flex-col md:flex-row items-center"
          style={{ backgroundColor: "rgb(202, 202, 202)" }}
        >
          {/* 이미지 영역 */}
          <div className="flex-[7]">
            <Image
              src="/images/dvrt_gray_man.jpg"
              width={1300}
              height={900}
              alt="icons"
              style={{ width: "100%", height: "auto" }}
              className="object-cover"
            />
          </div>
          {/* 텍스트 영역 */}
          <div className="flex-[3] text-center mr-8 pl-4">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              DVRT L2
            </h2>
            <p className="text-left text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-tight">
              L1의 심화 강의. 스트렝스 향상 프로그램. 근육 증가와 신체의 균형
              잡힌 강화. 불균형을 잡고 몸의 밸런스와 근력을 함께 향상
            </p>
            <ul className="text-left text-lg text-gray-500 leading-loose list-disc list-inside">
              <li>리커버리, 움직임 패턴 교정 강의</li>
              <li>DVRT L1을 수료한 상급 트레이너 대상</li>
              <li>얼티밋 샌드백, 케틀벨, 밴드 등 활용</li>
            </ul>
            <div className="my-4">
              <a
                className="text-blue-500"
                href="https://www.fittobe.ac/course/course_view.jsp?id=177046&cid=117226#course-view-177046"
                target="_blank"
              >
                상세 페이지 바로 가기
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Level 1의 기초를 바탕으로 더 복잡하고 실제적인 움직임 패턴을 훈련.
          </h1>
          <div className="flex justify-center items-center w-full">
            <p className="text-xl text-gray-700">
              (특히, 측면 강도와 파워를 심화하는 과정이다.)
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-[60%] border-t-2 border-gray-500 py-2 mb-4"></div>
          </div>

          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              기능적 측면 강도 심화 : 숄더 스쿼트, 레그 스레딩, 아크 프레스,
              셔킹 등 측면 움직임에 대한 저항 및 움직임 능력을 고도화한다.
            </p>
          </div>
          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              멀티플래너 움직임 훈련 : 힙 힌지 매트릭스, 런지 매트릭스, 스내치
              매트릭스 등 다양한 방향과 면에서 움직임을 제어하는 능력을 키운다.
            </p>
          </div>
          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              파워 및 로코모션 훈련 : 클린, 하이 풀, 스내치, 캐리 등 폭발적인
              힘을 생성하고 흡수하며, 실제 생활과 스포츠에 적용 가능한 고급
              로코모셤 능력을 발전시킨다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DVRTInfo4
