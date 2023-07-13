import React from 'react'
import { quotes } from '../assets'
const FeedbackCard = ({ content, name, title, img }) =>
{
    return (
        <div className={`flex flex-col justify-between px-10 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card`}>
            <img src={quotes} className="w-[42px] h-[27px] object-contain" alt="quotes" />
            <p className={`font-poppins font-normal text-[18px] leading-[32px] my-10  text-white`}>{content}</p>
            <div className={`flex flex-row items-center`}>
                <img src={img} className="w-[48px] h-[48px] object-contain rounded-full" alt="people_image" />
                <div className="flex flex-col ml-4">
                    <h4 className={`font-poppins font-semibold text-[20px] leading-[32px]  text-white`}>{name}</h4>
                    <p className={`font-poppins font-normal text-[16px] leading-[24px]  text-dimWhite`}>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard

