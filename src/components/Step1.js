import React, { useState } from 'react';
import Logo from './Logo';

const Step1 = () => {
    const [isFormOpen, setIsFormOpen] = useState(true);

    const closeForm = () => {
        setIsFormOpen(false);
        window.location.href = '/';
    };

    return (
        <>
            {isFormOpen && (
                <div className="min-h-screen w-full flex fixed items-center justify-center bg-[#f9fafc]">
                    <div className="absolute -right-60 -top-44 h-60 w-full transform-gpu md:right-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm z-10 relative">
                        <button
                            onClick={closeForm}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col mb-6">
                            <Logo className={12} />
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Create an Account
                            </h1>
                            <p className="text-sm text-gray-600">
                                Register to get started with your account.
                            </p>
                        </div>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="mobile"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Enter your mobile number"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="gender"
                                    className="block text-sm font-medium text-gray-900"
                                >
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="" disabled selected>
                                        Select your gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                />
                                <label
                                    htmlFor="terms"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    I agree to the terms and conditions
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Step1;
