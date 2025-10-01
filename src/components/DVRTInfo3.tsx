import Image from "next/image"

const DVRTInfo3: React.FC = () => {
  return (
    <section className="w-full py-4 flex justify-center items-center">
      <div className="relative w-[80%] max-w-[1200px]">
        <div
          className="flex flex-col md:flex-row items-center"
          style={{ backgroundColor: "rgb(202, 202, 202)" }}
        >
          {/* 텍스트 영역 */}
          <div className="flex-[3] text-center mr-8 pl-5">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              DVRT L1
            </h2>
            <p className="text-left text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-tight">
              스트렝스에 치중 된 프로그램. 불안정하다는 특징을 가진 얼티밋
              샌드백을 활용하여 근력을 키우고 효율적으로 동작의 퀄리티를 향상
            </p>
            <ul className="text-left text-sm text-gray-500 leading-loose list-disc list-inside">
              <li>힌지, 프레스, 런지, 스쿼트, 크로스 등 핵심 패턴</li>
              <li>트레이너, 스트렝스 코치들 대상</li>
              <li>얼티밋 샌드백 활용</li>
            </ul>
            <div className="my-4">
              <a
                className="text-blue-500"
                href="https://www.fittobe.ac/course/course_view.jsp?id=176826&cid=117226#course-view-176826"
                target="_blank"
              >
                상세 페이지 바로 가기
              </a>
            </div>
          </div>
          {/* 이미지 영역 */}
          <div className="flex-[7]">
            <Image
              src="/images/dvrt_course_1.jpg"
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
                움직임의 기준을 다지고 기본적인 근력을 구축하는데 중점을 두는
                과정.
              </h1>
            </div>
          </div>

          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              기초 움직임 패턴 숙달 : 스쿼트, 힙 힌지, 푸시, 풀, 로테이션 등
              기본적인 인간의 움직임 패턴을 올바르게 수행하는 데 집중한다.
            </p>
          </div>
          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              안정성 및 가동성 기반 다지기 : 움직임의 안정성과 필요한 가동성을
              확보하여 부상 위험을 줄이고 효율적인 움직임을 가능하게 한다.
            </p>
          </div>
          <div className="py-2 mb-2">
            <p className="text-xl text-gray-700">
              얼티밋 샌드백 활용의 기본 : 얼티밋 샌드백(Ultimate Sandbag)이라는
              도구를 사용하여 다양한 홀딩 포지션과 기본적인 운동 적용법을
              배웁니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DVRTInfo3
