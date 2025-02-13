"use client"
import Header from "../../../components/header/page"

export default function JobSeekerRegistration() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Form For JobSeeker</h2>

        <form className="space-y-8">
          {/* Personal Information */}
          <section className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">LAST NAME</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">FIRST NAME</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">MIDDLE NAME</label>
                <input
                  type="text"
                  placeholder="Enter your middle name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">SUFFIX</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {["None", "Jr.", "Sr.", "III"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">DATE OF BIRTH</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">PLACE OF BIRTH</label>
                <input
                  type="text"
                  placeholder="Enter your birth place"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">SEX</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {["Select", "Male", "Female"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Height(cm)</label>
                <input
                  type="text"
                  placeholder="In centimeter"
                  className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  placeholder="eg. 09112233445"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">CIVIL STATUS</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {["Select", "Single", "Married", "Widowed", "Separated"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">TIN NUMBER</label>
                <input
                  type="text"
                  placeholder="xxx-xxx-xxx-xxx"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Disability</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Deaf/Hard of Hearing",
                  "Intellectual Disability",
                  "Learning Disability",
                  "Mental Disability",
                  "Physical Disability",
                  "Orthopedic Disability",
                  "Psychosocial Disability",
                  "Speech and Language Impairment",
                  "Visual Disability",
                  "Cancer Disability",
                  "Rare Disease",
                ].map((disability) => (
                  <label key={disability} className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm">{disability}</span>
                  </label>
                ))}
              </div>
              <div className="space-y-1 mt-2">
                <label className="block text-sm font-medium text-gray-700">Other, specify:</label>
                <input
                  type="text"
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Employment Status */}
          <section className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Employment Status</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="employmentStatus" className="form-radio" />
                    <span className="text-sm">Employed</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="employmentStatus" className="form-radio" />
                    <span className="text-sm">Unemployed</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Are you actively looking for work?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="activelyLooking" className="form-radio" />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="activelyLooking" className="form-radio" />
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Willing to work immediately?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="willingToWork" className="form-radio" />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="willingToWork" className="form-radio" />
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">If no, when?</label>
                <input
                  type="text"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  How long have you been looking for work?
                </label>
                <input
                  type="text"
                  placeholder="in months"
                  className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Are you a 4Ps beneficiary?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="beneficiary" className="form-radio" />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="beneficiary" className="form-radio" />
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Household ID No.</label>
                <input
                  type="text"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Job Preferences */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Job Preferences</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">PREFERRED OCCUPATION</label>
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="space-y-1 mb-2">
                    <label className="block text-sm font-medium text-gray-700">{`${num}.`}</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">PREFERRED WORK LOCATION</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="workLocation" className="form-radio" />
                    <span className="text-sm">Local</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="workLocation" className="form-radio" />
                    <span className="text-sm">Overseas</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Expected Salary (Range):</label>
                <input
                  type="text"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Passport No.:</label>
                <input
                  type="text"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Expiry Date:</label>
                <input
                  type="date"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>

            {/* Language Proficiency */}
            <section className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Language/Dialect Proficiency</h3>
            </div>
            <table className="w-full">
              <thead>
              <tr>
                <th className="p-2 text-left">Language</th>
                <th className="p-2">Read</th>
                <th className="p-2">Write</th>
                <th className="p-2">Speak</th>
                <th className="p-2">Understand</th>
              </tr>
              </thead>
              <tbody>
              {["English", "Filipino", "Others"].map((lang) => (
                <tr key={lang}>
                <td className="p-2">{lang}</td>
                {[...Array(4)].map((_, i) => (
                  <td key={i} className="p-2 text-center">
                  <input type="checkbox" className="form-checkbox" />
                  </td>
                ))}
                </tr>
              ))}
              </tbody>
            </table>
            </section>

          {/* Educational Background */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Educational Background</h3>
            </div>
            {["ELEMENTARY", "SECONDARY", "TERTIARY", "GRADUATE STUDIES"].map((level) => (
              <div key={level} className="mb-6 last:mb-0">
                <h4 className="text-lg font-medium mb-3">{level}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">School</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  {level === "TERTIARY" && (
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Course</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Year graduated</label>
                    <input
                      type="text"
                      className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Are you an undergraduate?</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name={`undergraduate-${level}`} className="form-radio" />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name={`undergraduate-${level}`} className="form-radio" />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">What Level?</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Year Last Attended</label>
                    <input
                      type="text"
                      className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Awards Received</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Certification/Training */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Certification/Training</h3>
            </div>
            {[1, 2, 3].map((num) => (
              <div key={num} className="mb-6 last:mb-0">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Training/Vocational Course</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Date From</label>
                    <input
                      type="date"
                      className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Date To</label>
                    <input
                      type="date"
                      className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-1 mt-2">
                  <label className="block text-sm font-medium text-gray-700">Training Institution</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1 mt-2">
                  <label className="block text-sm font-medium text-gray-700">Certificates Received</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Eligibility/License */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Eligibility/License</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">ELIGIBILITY(Civil Service)</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {["Select", "Option 1", "Option 2"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Date of Examination</label>
                <input
                  type="date"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">PROFESSIONAL LICENSE(PRC)</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {["Select", "Option 1", "Option 2"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Valid Until</label>
                <input
                  type="date"
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Work Experience</h3>
            </div>
            {[1, 2, 3].map((num) => (
              <div key={num} className="mb-6 last:mb-0 border-b pb-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1 mt-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1 mt-2">
                  <label className="block text-sm font-medium text-gray-700">Position</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Date From</label>
                    <input
                      type="date"
                      className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Date To</label>
                    <input
                      type="date"
                      className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-1 mt-2">
                  <label className="block text-sm font-medium text-gray-700">STATUS</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {["Select", "Full-time", "Part-time", "Contract"].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </section>

          {/* Other Skills */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Other Skills</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Auto Mechanic",
                "Beautician",
                "Carpentry Work",
                "Computer Literate",
                "Domestic Chores",
                "Driver",
                "Electrician",
                "Embroidery",
                "Gardening",
                "Masonry",
                "Painter/Artist",
                "Painting jobs",
                "Photography",
                "Plumbing",
                "Sewing Dresses",
                "Stenography",
                "Tailoring",
              ].map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">{skill}</span>
                </label>
              ))}
            </div>
            <div className="space-y-1 mt-4">
              <label className="block text-sm font-medium text-gray-700">Others:</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </section>

          {/* Certification/Authorization */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Certification/Authorization</h3>
            </div>
            <p className="mb-4 text-sm">
              This is to certify that all data/information that I have provided in this form are true to the best of my
              knowledge. This Is also to authorized the DOLE to include my profile in the PESO Employment Information
              System , which is a subsystem of the PhilJobNet. It is understood that my name shall be made available to
              employers who have access to the Registry. I am also aware that DOLE is not obliged to seek employment on
              my behalf.
            </p>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </section>
        </form>
      </div>
    </>
  )
}

