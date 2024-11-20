import React from "react";

// TODO: Gender should be drop down (Male, Female, Others) = values (M, F, Others)
// TODO: Civil Status should be drop down (Single, Married, Widowed) = values (single, married, widowed)
// TODO: Not all input fields are are required.
// TODO: Email disabled
// TODO: Fix bg folors.

const Profile = () => {
  return (
    <div className="p-6">
      <div className="bg-form text-black px-4 py-2 rounded-full font-semibold w-[200px] ">
        Student Information
      </div>
      <div className="flex gap-3">
        <div className="w-96 ml-0 bg-form border border-DHVSU-black rounded-lg shadow-lg min-w-0">
          <div className="bg-form rounded-t-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-DHVSU-white rounded-full flex items-center justify-center text-DHVSU-red font-semibold border border-DHVSU-red">
              Image
            </div>

            <div className="text-center mt-4">
              <p className="text-lg font-bold text-DHVSU-red">
                Reyes, Mark Angelo J. (Student)
              </p>
              <p className="text-sm text-DHVSU-red">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm text-DHVSU-red">2022308414</p>
            </div>

            <button className="mt-4 px-4 py-2 bg-brown-700 text-DHVSU-white bg-DHVSU-red text-sm font-semibold rounded-full">
              &#x270E; Edit profile
            </button>
          </div>
        </div>

        <div className="flex-grow p-10 bg-DHVSU-light rounded-xl w-full shadow-md">
          <span className="text-DHVSU-white font-semibold mx-3">
            STUDENT INFORMATION
          </span>
          <button className="bg-DHVSU-white text-DHVSU-light px-4 py-1 rounded-full font-semibold text-sm">
            Personal
          </button>
          <button className="border border-DHVSU-white text-DHVSU-white px-4 py-1 rounded-full font-semibold text-sm">
            Family Background
          </button>
          <button className="border border-DHVSU-white text-DHVSU-white px-4 py-1 rounded-full font-semibold text-sm">
            Student ID
          </button>

          <div className="bg-DHVSU-light2 rounded-xl mx-0 my-2 w-full shadow-md p-6 space-y-4 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-1">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-1">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Ext.
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="flex flex-col col-span-1">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Date of Birth / Age
                </label>
                <input
                  type="date"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Place of Birth
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-1">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Civil Status
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="flex flex-col col-span-1">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Nationality
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Religion
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-1">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Contact #
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="flex flex-col col-span-1">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Heigth (cm)
                </label>
                <input
                  type="number"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Weight
                </label>
                <input
                  type="number"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Blood Type
                </label>
                <input
                  type="email"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="flex flex-col col-span-6">
                <label className="text-DHVSU-red font-semibold mb-2">
                  Address (House #/Block/Street/Subdivision/Building)
                </label>
                <input
                  type="text"
                  className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="flex flex-col col-span-1">
                  <label className="text-DHVSU-red font-semibold mb-2">
                    Province
                  </label>
                  <input
                    type="text"
                    className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                  />
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="text-DHVSU-red font-semibold mb-2">
                    Municipality / City
                  </label>
                  <input
                    type="text"
                    className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                  />
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="text-DHVSU-red font-semibold mb-2">
                    Barangay
                  </label>
                  <input
                    type="text"
                    className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                  />
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="text-DHVSU-red font-semibold mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="number"
                    className="border border-DHVSU-red rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-DHVSU-hover w-full"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
