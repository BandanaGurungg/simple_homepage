import React, { useState } from "react";

export default function App() {
  // hooks
  // 1. useState hooks
  const [winner, setWinner]= useState("none ");
  console.log(winner)
  return (
    <div>
  <p className="text-2xl font-bold">the winner is 🎉 {winner}</p>

     <div className="grid grid-cols-3 lg:grid-cols-6 text-white gap-8 my-12">
    { winner === "Hari" ?
     <p className="bg-gray-600 px-8 py-2 font-semibold" onClick={()=>setWinner("Hari")}>hari</p>
    :
    <p className="bg-orange-600 px-8 py-2 font-semibold" onClick={()=>setWinner("Hari")}>hari</p>
    }
      
     { winner ==="ram" ?
       <p className="bg-gray-600 px-8 py-2 font-semibold" onClick={()=>setWinner("ram")}>ram</p>
       :
       <p className="bg-orange-600 px-8 py-2 font-semibold" onClick={()=>setWinner("ram")}>ram</p>
     }
      
      {
        winner === "sham" ?
        <p className="bg-gray-600 px-8 py-2 font-semibold" onClick={()=>setWinner("sham")}>sham</p>
        :
        <p className="bg-orange-600 px-8 py-2 font-semibold" onClick={()=>setWinner("sham")}>sham</p>
      }


      {
        winner === "jayanti" ?
        <p className="bg-gray-600 px-8 py-2 font-semibold" onClick={()=>setWinner("jayanti")}>jayanti</p>
        :
        <p className="bg-orange-600 px-8 py-2 font-semibold" onClick={()=>setWinner("jayanti")}>jayanti</p>
      }
      
      {
        winner === "sita"?
        <p className="bg-gray-600 px-8 py-2 font-semibold" onClick={()=>setWinner("sita")}>sita</p>
        :
        <p className="bg-orange-600 px-8 py-2 font-semibold" onClick={()=>setWinner("sita")}>sita</p>
      }
      
    {
      winner ==="gita"?
      <p className="bg-gray-600 px-8 py-2 font-semibold" onClick={()=>setWinner("gita")}>gita</p>
      :
      <p className="bg-orange-600 px-8 py-2 font-semibold" onClick={()=>setWinner("gita")}>gita</p>
    }

     </div>









      <div className=" bg-orange-100/50 py-16 ">
        {/* pricing section */}
        <div className=" lg:w-8/12 mx-auto flex flex-col items-center space-y-8">
          {/* first child */}
          <div className=" space-y-8">
            <p className="text-center text-orange-500 font-bold">OUR PRICING</p>
            <p className="font-semibold text-center lg:text-5xl leading-normal">
              Choose The Plan That's Right For <br />{" "}
              <span className="text-orange-500">Your Business</span>
            </p>
          </div>

          {/* cards section */}
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white space-y-8">
              <div className="p-4 space-y-8">
                <div className="bg-orange-100  p-4 space-y-4">
                  <p className=" font-bold text-lg">Free</p>
                  <p className=" opacity-70">
                    Explore the products and power small personal projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" font-semibold text-5xl">
                    $0 <span className="text-sm">/Month</span>
                  </p>
                  <p>includes:</p>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 flex justify-center p-4">
                <button className="border border-orange-500 px-8 py-1">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white space-y-8">
              <div className="p-4 space-y-8">
                <div className="bg-orange-100  p-4 space-y-4">
                  <p className=" font-bold text-lg">Free</p>
                  <p className=" opacity-70">
                    Explore the products and power small personal projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" font-semibold text-5xl">
                    $0 <span className="text-sm">/Month</span>
                  </p>
                  <p>includes:</p>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 flex justify-center p-4">
                <button className="border border-orange-500 px-8 py-1">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white space-y-8">
              <div className="p-4 space-y-8">
                <div className="bg-orange-100  p-4 space-y-4">
                  <p className=" font-bold text-lg">Free</p>
                  <p className=" opacity-70">
                    Explore the products and power small personal projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className=" font-semibold text-5xl">
                    $0 <span className="text-sm">/Month</span>
                  </p>
                  <p>includes:</p>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                  <div className="flex gap-4">
                    <p>☑️</p>
                    <p>limited Encrypts</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-400 flex justify-center p-4">
                <button className="border border-orange-500 px-8 py-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* people join */}
      <div className=" bg-slate-700 py-6 ">
        <div className=" w-10/12  mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16">
          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M21.053 20.8c-1.132-.453-1.584-1.698-1.584-1.698s-.51.282-.51-.51s.51.51 1.02-2.548c0 0 1.413-.397 1.13-3.68h-.34s.85-3.51 0-4.7c-.85-1.188-1.188-1.98-3.057-2.547s-1.188-.454-2.547-.396s-2.492.793-2.492 1.19c0 0-.85.056-1.188.396c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.625l-.337.114c-.284 3.283 1.13 3.68 1.13 3.68c.51 3.058 1.02 1.756 1.02 2.548s-.51.51-.51.51s-.452 1.245-1.584 1.698s-7.416 2.886-7.927 3.396c-.512.51-.454 2.888-.454 2.888H29.43s.06-2.377-.452-2.888c-.51-.51-6.795-2.944-7.927-3.396zm-12.47-.172c-.1-.18-.148-.31-.148-.31s-.432.24-.432-.432s.432.432.864-2.16c0 0 1.2-.335.96-3.118h-.29s.144-.59.238-1.334a10 10 0 0 1 .037-.996l.038-.426c-.02-.492-.107-.94-.312-1.226c-.72-1.007-1.008-1.68-2.59-2.16c-1.584-.48-1.01-.384-2.16-.335c-1.152.05-2.112.672-2.112 1.01c0 0-.72.047-1.008.335c-.27.27-.705 1.462-.757 1.885v.28c.048.654.26 2.45.47 2.873l-.286.096c-.24 2.782.96 3.118.96 3.118c.43 2.59.863 1.488.863 2.16s-.432.43-.432.43s-.383 1.058-1.343 1.44l-.232.092v5.234h.575c-.03-1.278.077-2.927.746-3.594c.357-.355 1.524-.94 6.353-2.862zm22.33-9.056c-.04-.378-.127-.715-.292-.946c-.718-1.008-1.007-1.68-2.59-2.16s-1.007-.384-2.16-.335c-1.15.05-2.11.672-2.11 1.01c0 0-.72.047-1.008.335c-.27.272-.71 1.472-.758 1.89h.033l.08.914c.02.23.022.435.027.644c.09.666.21 1.35.33 1.59l-.286.095c-.24 2.782.96 3.118.96 3.118c.432 2.59.863 1.488.863 2.16s-.43.43-.43.43s-.054.143-.164.34c4.77 1.9 5.927 2.48 6.28 2.833c.67.668.774 2.316.745 3.595h.48V21.78l-.05-.022c-.96-.383-1.344-1.44-1.344-1.44s-.433.24-.433-.43s.433.43.864-2.16c0 0 .804-.23.963-1.84V14.66q0-.026-.003-.05h-.29s.216-.89.293-1.862z"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold">
              100,000+ <br />{" "}
              <span className=" text-gray-400 text-base">
                No. of People Join
              </span>
            </p>
          </div>

          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2zm.5 6.5L9 12l2 2l4.5-4.5L17 11l-6 6z"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold text-center">
              120+ <br />
              <span className=" text-gray-400 text-base">
                Countries Reached
              </span>
            </p>
          </div>

          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15 8v8H5V8zm1-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4V7a1 1 0 0 0-1-1"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold">
              425,000+ <br />
              <span className=" text-gray-400 text-base">
                No. of Sessions Given
              </span>
            </p>
          </div>

          <div className=" space-y-6 flex flex-col items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M255.656 22.75c-131.173 0-237.72 33.326-237.72 74.344c.002 22.39 32.41 42.59 82.564 56.22c-17.407-8.91-27.53-19.216-27.53-30.47c0-32.128 81.75-58.53 182.686-58.53s183.25 26.4 183.25 58.53c0 11.194-10.3 21.59-27.53 30.47c49.843-13.627 81.968-33.91 81.968-56.22c0-41.018-106.514-74.344-237.688-74.344M147.47 103.094v30.094h216.28v-30.094zm4.374 48.78V361.94h18.687V151.875h-18.686zm39.125 0c.698 61.812 25.325 96.435 52.81 103.814c-27.847 7.475-52.776 42.9-52.843 106.25h128.188c-.066-63.353-24.952-98.766-52.78-106.25c27.468-7.386 52.05-41.998 52.75-103.813H190.968zm147.936 0V361.94h18.688V151.875h-18.688zM100.5 360.72c-50.153 13.626-82.563 33.827-82.563 56.217c0 41.018 106.546 74.344 237.72 74.344s237.687-33.325 237.687-74.342c0-22.31-32.125-42.593-81.97-56.22c17.232 8.88 27.532 19.244 27.532 30.438c0 32.13-82.313 58.563-183.25 58.563S72.97 423.283 72.97 391.155c0-11.254 10.123-21.528 27.53-30.437zm46.97 19.905v30.063h216.28v-30.063z"
                />
              </svg>
            </div>
            <p className="text-white text-4xl font-bold text-center">
              500K <br />{" "}
              <span className=" text-gray-400 text-base">Hour of work</span>
            </p>
            <p></p>
          </div>
        </div>
      </div>

      {/* office address */}

      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
          <svg className=" animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
            />
            <path
              fill="currentColor"
              d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
            />
          </svg>
          <p>
            <span className="text-2xl font-bold">Office address</span> <br />2
            Holt Street, Surry Hills, Australia.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
          <svg
          className="animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.93 21q-2.528 0-5.184-1.266t-4.935-3.555t-3.545-4.935T3 6.07q0-.458.3-.763T4.05 5h2.473q.408 0 .712.257q.303.257.411.659L8.142 8.3q.07.42-.025.733t-.333.513l-2.193 2.046q.615 1.117 1.36 2.076t1.59 1.817q.87.87 1.875 1.62q1.003.749 2.203 1.414l2.139-2.177q.244-.263.549-.347t.674-.033l2.104.43q.407.1.661.411t.254.712v2.435q0 .45-.306.75t-.763.3M5.12 10.654l1.92-1.765q.095-.077.124-.212q.03-.135-.01-.25l-.444-2.12q-.038-.153-.134-.23T6.327 6H4.275q-.115 0-.192.077t-.077.192q.029 1.025.321 2.14t.794 2.245m8.45 8.334q1.014.502 2.16.743q1.148.24 2 .257q.115 0 .192-.077T18 19.72v-2.008q0-.153-.077-.25q-.077-.096-.23-.134l-1.85-.379q-.116-.039-.202-.01q-.087.03-.183.125zM12.5 4q-.213 0-.356-.144T12 3.499t.144-.356T12.5 3h8q.213 0 .356.144t.144.357t-.144.356T20.5 4zm0 3.385q-.213 0-.356-.144Q12 7.097 12 6.884t.144-.356t.356-.143h8q.213 0 .356.144t.144.356t-.144.356t-.356.144zm0 3.384q-.213 0-.356-.144T12 10.27t.144-.356t.356-.144h8q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143z"
            />
          </svg>
          <p>
            <span className="text-2xl font-bold">Telephone number</span> <br />
            1-888-452-1505
          </p>
        </div>

        <div className="flex items-center gap-4 bg-orange-100 p-6 rounded-md">
          <svg
          className="animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="m3 7l9 6l9-6" />
            </g>
          </svg>
          <p>
            <span className="text-2xl font-bold">Mail address</span> <br />
            supprot22@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
