import React from 'react'

function CustomerCard({ data }) {
    return (
        <div
            className="
                w-[85%] max-w-[260px]
                sm:max-w-sm
                p-3 sm:p-6                
                rounded-3xl shadow-2xl 
                text-white bg-gray-900 border border-indigo-700
                hover:shadow-indigo-500/50 transition duration-300 ease-in-out transform hover:scale-[1.02] 
               md:bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
            "
        >
            <div className="flex justify-end mb-2 sm:mb-4">
                <span className="text-3xl sm:text-4xl text-indigo-400 opacity-70">"</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start">
                <div className="flex-shrink-0">
                    <img
                        src={data.image}
                        alt={data.name}
                        className="
                            w-14 h-14           /* smaller image on mobile */
                            sm:w-24 sm:h-24
                            rounded-full object-cover 
                            border-4 border-indigo-500/50 shadow-lg
                        "
                    />
                </div>

                <div className="order-3 sm:order-2 w-full">
                    <p className="text-sm sm:text-base italic leading-relaxed text-gray-300 font-light mt-0 sm:mt-1">
                        "{data.description}"
                    </p>
                </div>
            </div>

            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-indigo-700/50 flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-extrabold text-indigo-300 tracking-wide">
                    {data.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-400 mt-0.5">
                    {data.role}
                </p>
            </div>
        </div>
    );
}

export default React.memo(CustomerCard)
