import React from "react";

export const WorkCard = (props) => {
    return (
        <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
        >

            <div

                style={{ backgroundImage: `url(${props.item.image})`,backgroundSize:'contain'}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                <div className='opacity-0 group-hover:opacity-100 bg-blue-200'>
              <span className='text-2xl font-bold text-gray-600 tracking-wider'>
                {props.item.title}
              </span>
                    <div className='pt-8 text-center'>
                          <a href={props.item.demoUrl} target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>
                        <a href={props.item.codeUrl} target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>



        </div>
    )
}
