import React from 'react'

function CustomerCard({ data }) {
    return (
        <div
            className="
                w-full max-w-xs sm:max-w-sm h-auto p-6 rounded-3xl shadow-2xl 
                text-white bg-gray-900 border border-indigo-700
                hover:shadow-indigo-500/50 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
            "
        >
            <div className="flex justify-end mb-4">
                <span className="text-4xl text-indigo-400 opacity-70">"</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-shrink-0">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-indigo-500/50 shadow-lg"
                    />
                </div>

                <div className="order-3 sm:order-2 w-full">
                    <p className="text-base italic leading-relaxed text-gray-300 font-light mt-0 sm:mt-1">
                        "{data.description}"
                    </p>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-indigo-700/50 flex flex-col items-start">
                <h3 className="text-xl font-extrabold text-indigo-300 tracking-wide">
                    {data.name}
                </h3>
                <p className="text-sm font-medium text-gray-400 mt-0.5">
                    {data.role}
                </p>
            </div>
        </div>
    );
}

export default React.memo(CustomerCard)
