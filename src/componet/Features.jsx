import React from 'react'

function Features() {
  return (
    
            <div className="flex flex-col mt-10 mx-100">
                <div className="mb-4 text-2xl text-center font-black">
                    <u className="font-bold text-indigo-800">Features</u>
                </div>

                <div className="mt-2 lg:px-30 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    <div className="hover:animate-bounce flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M10.5 18a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                                <path fillRule="evenodd"
                                    d="M7.125 1.5A3.375 3.375 0 003.75 4.875v14.25A3.375 3.375 0 007.125 22.5h9.75a3.375 3.375 0 003.375-3.375V4.875A3.375 3.375 0 0016.875 1.5h-9.75zM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 016 19.125V4.875z"
                                    clipRule="evenodd" />
                            </svg>


                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-black text-color1">ONLINE ORDER</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                <path
                                    d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>


                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-black text-color1">PICKUP AND DELIVERY</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                <path fillRule="evenodd"
                                    d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                                    clipRule="evenodd" />
                            </svg>

                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-black text-color1">AFFORDABLE PRICE</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce  flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path
                                    d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>


                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-black text-color1">DESIGN CONSULTATION</p>
                        </div>
                    </div>
                    <div className="hover:animate-bounce  flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd"
                                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                    clipRule="evenodd" />
                            </svg>

                        </div>
                        <div className="ml-4">
                            <p className="mt-2 text-sm font-black text-color1">CONVENIENCE</p>
                        </div>
                    </div>
                    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">

                        <div className="ml-10 mb-0">

                            <a to="/explore" className="block animate-bounce 
                        px-6 py-2 text-white bg-indigo-900 rounded-full baseline">Explore</a>
                        </div>

                    </div>
                </div>
            
    </div>
  )
}

export default Features