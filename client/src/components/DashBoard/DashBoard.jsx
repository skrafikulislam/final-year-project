import axios from "axios";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [moisture, setMoisture] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const fetchMoistureData = async () => {
    try {
      const moistureData = await axios.get("http://127.0.0.1/get-sensor-data");
      setMoisture(moistureData.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMoistureData();
  }, []);

  const handleYesClick = () => {
    setShowPopup(false);
    // Handle the "Yes" action here
  };

  const handleNoClick = () => {
    setShowPopup(false);
    // Handle the "No" action here
  };
  return (
    <div>
      <div class="w-full  lg:ps-64">
        <div class="p-4 sm:p-6  space-y-4 sm:space-y-6">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div class="flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="p-4 md:p-5">
                <div class="flex items-center gap-x-2">
                  <p class="text-xs uppercase tracking-wide text-gray-600  ">
                    Temparature
                  </p>
                </div>

                <div class="mt-1 flex items-center gap-x-2">
                  <h3 class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    37 Degree
                  </h3>
                  <span class="flex items-center gap-x-1 text-green-600">
                    <svg
                      class="inline-block size-4 self-center"
                      xmlns="http://www.w3.org/6000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span class="inline-block text-sm">1.7%</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="p-4 md:p-5">
                <div class="flex items-center gap-x-2">
                  <p class="text-xs uppercase tracking-wide text-gray-600  ">
                    Weather Forecast
                  </p>
                </div>

                <div class="mt-1 flex items-center gap-x-2">
                  <h3 class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    29.4% Cloudy
                  </h3>
                </div>
              </div>
            </div>

            <div class="flex flex-col bg-green-600 border shadow-sm rounded-xl ">
              <div class="p-4 md:p-5">
                <div class="flex items-center gap-x-2">
                  <p class="text-xs uppercase tracking-wide text-gray-600  ">
                    Precipiation
                  </p>
                </div>

                <div class="mt-1 flex items-center gap-x-2">
                  <h3 class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    20%
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div class="grid pt-10 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* <div class="p-4 md:p-5 min-h-[480px] flex flex-col bg-green-600   border shadow-sm rounded-xl ">
              <div class="flex justify-between items-center">
                <div>
                  <h2 class="text-sm text-gray-600  ">Income</h2>
                  <p class="text-xl sm:text-2xl font-medium text-gray-600  ">
                    $126,238.49
                  </p>
                </div>

                <div>
                  <span class="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-600 dark:bg-teal-600/10 dark:text-teal-600">
                    <svg
                      class="inline-block size-3.5"
                      xmlns="http://www.w3.org/6000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    25%
                  </span>
                </div>
              </div>

              <div id="hs-multiple-bar-charts"></div>
            </div> */}

            <div>
              {showPopup ? (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 max-w-2xl">
                    <p className="mb-4">You need to start the pump</p>
                    <div className="flex justify-end space-x-4">
                      <button
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        onClick={handleYesClick}
                      >
                        Yes
                      </button>
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={handleNoClick}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid pt-10 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-4 md:p-5 min-h-[480px] flex flex-col bg-green-600 border shadow-sm rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-sm text-gray-600">Income</h2>
                        <p className="text-xl sm:text-2xl font-medium text-gray-600">
                          $126,238.49
                        </p>
                      </div>
                      <div>
                        <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-600">
                          <svg
                            className="inline-block size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                          </svg>
                          25%
                        </span>
                      </div>
                    </div>
                    <div id="hs-multiple-bar-charts"></div>
                  </div>

                  {/* You can add more cards or UI elements here */}
                </div>
              )}

              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setShowPopup(true)}
              >
                Toggle Popup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
