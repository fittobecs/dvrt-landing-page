"use client"
import Image from "next/image"
import React from "react"

interface Course {
  id: string
  title: string
  active?: boolean
  path: string
  url?: string
}

const Logos: React.FC = () => {
  const courses: Course[] = [
    {
      id: "DVRT L1",
      title: "DVRT L1",
      path: "/images/slide_logo_1.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=176826&cid=117226#course-view-176826",
    },
    {
      id: "DVRT L2",
      title: "DVRT L2",
      path: "/images/slide_logo_2.png",
      url: "https://www.fittobe.ac/course/course_view.jsp?id=177046&cid=117226#course-view-177046",
    },
    {
      id: "DVRT RESTORATION",
      title: "DVRT RESTORATION",
      path: "/images/slide_logo_3.png",
    },
  ]

  return (
    <div
      className="w-full py-8"
      style={{ backgroundColor: "rgb(202, 202, 202)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-700 tracking-wide">
            DVRT 교육 과정
          </h2>
        </div>

        {/* Navigation Container */}
        <div className="relative flex items-center justify-center">
          {/* Course Navigation */}
          <div className="flex items-center space-x-8 mx-8">
            {courses.map((course) => (
              <a href={course.url} target="_blank" key={course.id}>
                <Image
                  key={course.id}
                  src={course.path}
                  width={190}
                  height={96}
                  alt={course.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logos
