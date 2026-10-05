import React from 'react';

function NetworkCards({ name, image, info }) {
  return (
    <div className="bg-[#141412] border border-[#26250F] rounded-lg p-3.5 sm:p-4 mb-4 shadow-lg hover:border-[#ffde59] transition-all duration-300">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 mr-3 overflow-hidden rounded-md flex items-center justify-center bg-white flex-shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-contain p-1"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=48&width=48"
              e.currentTarget.alt = "Logo placeholder"
            }}
          />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-[#ffde59] truncate">{name}</h3>
      </div>
      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{info}</p>
    </div>
  )
}

export default NetworkCards

