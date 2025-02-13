"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import Header from "../../components/header/page"
import Footer from "@/app/components/footer/page"

const JobPortal = () => {
  const [jobs, setJobs] = useState<any[]>([])
  const [jobSearch, setJobSearch] = useState("")
  const [locationSearch, setLocationSearch] = useState("")

  useEffect(() => {
    // Fetch jobs (replace with actual API call)
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
  }, [])

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Search Bar */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-400 py-16">
          <div className="container mx-auto px-4">
            <form action="/search" className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white rounded-lg shadow-md flex items-center px-4 py-2">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={jobSearch}
                    onChange={(e) => setJobSearch(e.target.value)}
                    placeholder="Job position"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-md flex items-center px-4 py-2">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    placeholder="Work Location"
                    className="w-full outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  SEARCH
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Job Listings */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">Find Jobs Here</h1>
          <h3 className="text-xl text-center text-gray-600 mb-8">
            You may search by position title, employer name, work location, education level, etc.
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="p-6">
                    <Link href={`/jobs/${job.id}`} className="block mb-2">
                      <h3 className="text-xl font-semibold text-blue-700 hover:text-blue-800">{job.position}</h3>
                    </Link>
                    <p className="text-gray-600 mb-2">{job.employer_post.business_name}</p>
                    <p className="text-gray-500 mb-2 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {job.employer_post.location}
                    </p>
                    <p className="text-gray-500 mb-4 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {job.salary}
                    </p>
                    <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
                    <Link
                      href={`/jobs/${job.id}`}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No jobs available</p>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default JobPortal

