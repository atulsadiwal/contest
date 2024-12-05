/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Logo from './Logo';

const Register = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#f9fafc] overflow-hidden"> {/* Add overflow-hidden */}
                <div className="absolute -right-60 -top-44 h-60 w-full transform-gpu md:right-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>

                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm z-10">
                    <div className="flex flex-col mb-6">
                        <Logo className={12} />
                        <h1 className="text-2xl font-semibold text-gray-900">Create an Account</h1>
                        <p className="text-sm text-gray-600">Register to get started with your account.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-900">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-900">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="mobile" className="text-sm font-medium text-gray-900">
                                Mobile
                            </label>
                            <input
                                id="mobile"
                                type="tel"
                                placeholder="Enter your mobile number"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="gender" className="text-sm font-medium text-gray-900">
                                Gender
                            </label>
                            <select
                                id="gender"
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

                        <div className="flex items-center space-x-2">
                            <input
                                id="terms"
                                type="checkbox"
                                className="h-4 w-4 text-primary rounded"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree to the{" "}
                                <a href="#" className="text-primary hover:underline">
                                    terms and conditions
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-primary bg-amber-500 rounded-lg hover:bg-primary-dark focus:outline-none"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
