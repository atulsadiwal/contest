import React, { useState } from 'react';
import Logo from './Logo';

const Step2 = ({ onSubmit, onBack }) => {

    const [formData, setFormData] = useState({
        dob: '',
        city: '',
        collegeName: '',
        highestQualification: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const [isFormOpen, setIsFormOpen] = useState(true);

    const closeForm = () => {
        setIsFormOpen(false);
        window.location.href = '/';
    };

    return (
        <>{isFormOpen && (
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
                        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Step 2: Personal Information</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full py-1.5 px-3 border rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full py-1.5 px-3 border rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College Name</label>
                            <input
                                type="text"
                                id="collegeName"
                                name="collegeName"
                                value={formData.collegeName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full py-1.5 px-3 border rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                            <input
                                type="text"
                                id="highestQualification"
                                name="highestQualification"
                                value={formData.highestQualification}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full py-1.5 px-3 border rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={onBack}
                                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
        </>
    );
}

export default Step2;
