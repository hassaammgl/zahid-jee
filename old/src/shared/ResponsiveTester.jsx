"use client"
import React from "react";

const ResponsiveBreakpointTester = () => {
    return (
        <div
            className="
        h-56 flex flex-col items-center justify-center p-6
        bg-gray-600 sm:bg-red-600 md:bg-blue-600 lg:bg-green-600 xl:bg-yellow-600 2xl:bg-purple-600
        transition-colors duration-500
      "
        >
            {/* Default */}
            <div className="
        block sm:hidden
        px-6 py-3 rounded-full text-lg font-semibold shadow-lg mb-10
        bg-gray-200 text-gray-900
      ">
                default
            </div>

            {/* SM */}
            <div className="
        hidden sm:block md:hidden
        px-6 py-3 rounded-full text-lg font-semibold shadow-lg mb-10
        bg-red-200 text-red-900
      ">
                SM
            </div>

            {/* MD */}
            <div className="
        hidden md:block lg:hidden
        px-6 py-3 rounded-full text-lg font-semibold shadow-lg mb-10
        bg-blue-200 text-blue-900
      ">
                MD
            </div>

            {/* LG */}
            <div className="
        hidden lg:block xl:hidden
        px-6 py-3 rounded-full text-lg font-semibold shadow-lg mb-10
        bg-green-200 text-green-900
      ">
                LG
            </div>

            {/* XL */}
            <div className="
        hidden xl:block 2xl:hidden
        px-6 py-3 rounded-full text-lg font-semibold shadow-lg mb-10
        bg-yellow-200 text-yellow-900
      ">
                XL
            </div>

            {/* 2XL */}
            <div className="
        hidden 2xl:block
        px-6 py-3 rounded-full text-lg font-semibold shadow-lg mb-10
        bg-purple-200 text-purple-900
      ">
                2XL
            </div>
        </div>
    );
};

export default ResponsiveBreakpointTester;
