import React from "react";

function card({ username, followers, following, about, img }) {
  return (
    <div className="relative w-50 h-70 rounded-xl">
      <img className="rounded-3xl w-23/24 h-11/12 object-cover z-0 overflow-hidden"
        src={img}
        alt="" />

      <div
        className="w-50 h-full top-0 rounded-3xl border-8 border-stone-100 absolute z-20 bg-linear-to-t from-slate-800 to-80% to transparent">
      </div>

      <div className="px-3.5 pb-4 pt-2 absolute bottom-0 z-30">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-slate-100 text-xl">{username}</h3>
          <i className="fa-solid fa-circle-check text-green-400"></i>

        </div>

        <p className="text-slate-300 text-sm">{about}</p>
        <div className="flex items-center justify-between mt-3 mb-1">
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-user text-slate-300 text-xs"></i>
            <p className="text-sm text-slate-100">{followers}</p>
          </div>

          <div className="flex items-center gap-1">
            <i className="fa-solid fa-images text-slate-300 text-xs"></i>
            <p className="text-sm text-slate-100">{following}</p>
          </div>

          <button className="px-2.5 py-1 bg-gray-300 text-sm rounded-full hover:bg-white">Follow + </button>
        </div>
      </div>
    </div>

  )
}
export default card

