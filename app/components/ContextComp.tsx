import React, { useContext } from 'react'

const ContextComp = () => {
    // const prop = useContext(CountContext)
    return (
        <div className=" w-[55vw] flex flex-col items-center p-5 gap-y-6">
            <h2 className="group relative uppercase tracking-wide text-lg border-b border-b-red-400
         overflow-hidden">
                Making Use of
                <span className="normal-case">CreateContext()</span>
                Hooks in React!
                <span className="absolute w-[15%] h-[5%] -left-[15%] bottom-0 border-b border-b-gray-600 z-20
          group-hover:translate-x-[100%] duration-200" />
            </h2>
            <p>We passed the count value to this component so we can keep using it through out our project without having to pass props</p>
        </div>
    )
}

export default ContextComp