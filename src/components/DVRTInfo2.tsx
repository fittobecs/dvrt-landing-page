"use client"

import React from "react"

const FMSInfo2: React.FC = () => {
  return (
    <section className="w-full py-12">
      {/* 상단 수평선 */}
      <div className="mt-8 px-4">
        <hr className="border-2 border-gray-800 w-3/4 mx-auto" />
      </div>
      {/* 제목 */}
      <h1 className="text-[42px] font-bold m-12 text-center leading-10">
        DVRT 자격 과정
      </h1>

      {/* 컨테이너 */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* 컴포넌트 1 */}
          <div
            className="flex flex-col items-center"
            style={{ backgroundColor: "rgb(202, 202, 202)" }}
          >
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mSddwITksLA"
                title="DVRT L1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="text-xl font-bold text-center">DVRT L1</h2>
            <div className="p-4">
              <p className="mt-2">
                대상: 트레이너, 스트렝스 코치(ACE, NASM CPT CEU)
              </p>
              <p className="mt-2">
                도구 : 불안정성 학습에 필요한 얼티밋 샌드백 파워 및 스트렝스
              </p>
            </div>
          </div>
          {/* 컴포넌트 2 */}
          <div
            className="flex flex-col items-center relative"
            style={{ backgroundColor: "rgb(225, 225, 225)" }}
          >
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Kb2SmxHVOk8"
                title="DVRT L2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="text-xl font-bold text-center">DVRT L2</h2>
            <div className="p-4">
              <p className="mt-2">
                대상 : DVRT 레벨 1을 수료한 상급 트레이너(ACE/NASM CPT CEU)
              </p>
              <p className="mt-2">
                도구 : 하중있는 얼티밋 샌드백 스트렝스 및 벌리, 케틀벨/밴드 등
              </p>
            </div>
          </div>
          {/* 컴포넌트 3 */}
          <div
            className="flex flex-col items-center"
            style={{ backgroundColor: "rgb(202, 202, 202)" }}
          >
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7QKEp0gjbvM"
                title="DVRT L1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="text-xl font-bold text-center">DVRT RESTORATION</h2>
            <div className="p-4">
              <p className="mt-4">대상 : 재활 및 교정 트레이너, 물리치료사</p>
              <p className="mt-4">
                도구 : 가볍지만 자각을 유도하는데 도움이 되는 얼티밋 샌드백 코어
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
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

      <div className="mt-16 px-4">
        <hr className="border-2 border-gray-800 w-3/4 mx-auto" />
      </div>
    </section>
  )
}

export default FMSInfo2
