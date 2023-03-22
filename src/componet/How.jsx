import React from 'react'

function How() {
  return (
    <div>
        <div>
         <h3 className="my-5 text-center text-1xl font-semibold text-color1">How we work : </h3>
                <h3 className="mb-4 text-center text-1xl font-bold text-indigo-900"><u>PICK-UP</u></h3>
                <ul className="grid place-content-center md:grid-cols-5 sm:grid-cols-2 ">
                    <li className="flex  ">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                        
                            <p className="max-w-xs py-2 text-sm text-color1">create an account or log in with your email and
                                password </p>
                
                    </li>
                    <li className="flex">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                            <p className="max-w-xs py-2 text-sm text-color1">input necessary info as provided and submit</p>
                    </li>
                    <li className="flex">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                        
                            <p className="max-w-xs py-2 text-sm text-color1">Relax and wait for our representative to come
                                knocking at your door</p>
                    </li>
                    <li className="flex">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                            <p className="max-w-xs py-2 text-sm text-color1">Have a chat with our rep, getting your details </p>
                    </li>
                    <li className="flex">
                        <div className="pr-2 text-3xl  text-indigo-800">-</div>
                            <p className="max-w-xs py-2 text-sm text-color1">Sit back and await your package at your
                                doorstep </p>
                    </li>
                </ul>
            </div>
            <div className="-pt-100 m-10 ">
                <h3 className="mb-4 text-center text-1xl font-bold text-indigo-900"><u>ORDERING ONLINE</u></h3>
                <ul className="grid place-content-center md:grid-cols-3 sm:grid-cols-2 gap-2">
                    <li className="flex shadow-2xl p-1">
                        <div className="pr-2 text-2xl  text-indigo-800">1.</div>
                            <p className="max-w-xs py-1 text-sm text-color1">create an account or log in with your email and
                                password </p>
                    </li>
                    <li className="flex shadow-2xl p-1">
                        <div className="pr-2 text-2xl  text-indigo-800">2.</div>
                    
                            <p className="max-w-xs py-1 text-sm text-color1">navigate or click on order Link delivery</p>
                    </li>
                    <li className="flex bg-slate-400-50 shadow-2xl p-1  ">
                        <div className="pr-2 text-2xl  text-indigo-800">3.</div>
                            <p className="max-w-xs py-1 text-sm text-color1">You can choose your design from cart or from phone
                                gallery </p>
                    </li>
                    <li className="flex bg-slate-50 shadow-2xl p-1">
                        <div className="pr-2 text-2xl  text-indigo-800">4.</div>
                            <p className="max-w-xs py-1 text-sm text-color1">Quality material are displayed at the ease online
                                market,choose by clicking </p>
                    </li>
                    <li className="flex bg-slate-400-50 shadow-2xl p-1">
                        <div className="pr-2 text-2xl  text-indigo-800">5.</div>
                            <p className="max-w-xs py-1 text-sm text-color1">input your body size,using our A.I model or by
                                watching our video on how to take one </p>
                    </li>
                    <li className="flex bg-slate-50 shadow-2xl p-1">
                        <div className="pr-2 text-2xl  text-indigo-800">6.</div>
                            <p className="max-w-xs py-1 text-sm text-color1 ">Sit back and await your package at your
                                doorstep </p>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default How