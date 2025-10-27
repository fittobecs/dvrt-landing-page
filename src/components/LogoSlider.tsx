"use client"
import Image from "next/image"
import React from "react"

const LogoSlider: React.FC = () => {
  // 로고 이미지와 URL을 매핑한 배열
  const logos = [
    {
      src: "/images/slide_logo_1.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=176826&cid=117226#course-view-176826",
    },
    {
      src: "/images/slide_logo_2.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=177046&cid=117226#course-view-177046",
    },
    {
      src: "/images/slide_logo_3.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=173210&cid=113696#course-view-173210",
    },
    {
      src: "/images/burly_small.png",
      url: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1439&cid=113703&",
    },
    {
      src: "/images/core_small.png",
      url: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1192&cid=113703&",
    },
    {
      src: "/images/force_small.png",
      url: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=2432&cid=113703&",
    },
    {
      src: "/images/power_small.png",
      url: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1193&cid=113703&",
    },
    {
      src: "/images/strength_small.png",
      url: "https://www.fittobe.ac/product/product_view.jsp?type=P&id=1194&cid=113703&",
    },
  ]

  // 무한 루프 효과를 위해 로고 배열을 두 배로 복제
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="overflow-hidden w-full">
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-109%); /* 2배 복제로 인해 1/2 이동 */
          }
        }

        .animate-slide {
          display: flex;
          animation: slide 25s linear infinite; /* 데스크톱: 25초 */
          will-change: transform; /* 애니메이션 성능 최적화 */
        }

        .animate-slide > div {
          flex: 0 0 auto; /* 각 로고의 크기 고정 */
        }

        .logo-image {
          border-radius: 12px; /* 이미지 끝 부분 둥글게 */
          overflow: hidden; /* 둥근 모서리 밖으로 이미지가 삐져나오지 않도록 */
        }

        /* 모바일 화면 (762px 이하)에서 애니메이션 속도 2배 */
        @media screen and (max-width: 762px) {
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-394%); /* 모바일에서도 동일한 이동 거리 */
            }
          }
          .animate-slide {
            animation: slide 15s linear infinite; /* 모바일: 12.5초 (2배 빠름) */
          }
        }
      `}</style>
      <div className="flex animate-slide whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={`Logo ${(index % logos.length) + 1}`}
                width={190}
                height={96}
                className="object-cover logo-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoSlider
