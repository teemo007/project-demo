import { useState, useEffect, useRef } from 'react';

import React from 'react'

const Carousel = ({ charts }) => {
    const [current, setCurrent] = useState(0);
	const [autoPlay, setAutoPlay] = useState(true);
	const timeOut = useRef(null);

    useEffect(() => {
		timeOut.current =
			autoPlay &&
			setTimeout(() => {
				slideRight();
			}, 15000);
	});

    const slideLeft = () => {
		setCurrent(current === 0 ? charts?.length - 1 : current - 1);
	};
	const slideRight = () => {
		setCurrent(current === charts?.length - 1 ? 0 : current + 1);
	};
  return (
    <div
			className="h-[400px] w-full whitespace-nowrap "
			onMouseEnter={() => {
				setAutoPlay(false);
				clearTimeout(timeOut.current);
			}}
			 onMouseLeave={() => {
				setAutoPlay(true);
			}} 

		>
			<div
				className="relative w-full h-full"
				/* id="DisplayFrame" */
			>
				{charts?.map((chart, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? 'flex flex-1 absolute w-full h-full overflow-hidden opacity-100 pointer-events: visible transition-[0.5s] duration-[ease-in-out] scale-100'
									: 'flex flex-1 absolute w-full h-full overflow-hidden opacity-0 pointer-events-none transition-[0.5s] duration-[ease-in-out] scale-[0.8] '
							}
							id={ index}
						>
							{chart.chart}
						</div>
					);
				})}
				<div className="absolute text-[50px] translate-x-0 -translate-y-2/4 bg-[none] flex justify-center items-center w-5 h-[30px] cursor-pointer pb-[7px] rounded-[50%] top-2/4 z-9" onClick={slideLeft}>
					&lsaquo;
				</div>
				<div className="absolute right-[-4px] text-[50px] translate-x-0 -translate-y-2/4 bg-[none] flex justify-center items-center w-5 h-[30px] cursor-pointer pb-[7px] rounded-[50%] top-2/4" onClick={slideRight}>
					&rsaquo;
				</div>
			</div>
			<div className="absolute -translate-x-2/4 translate-y-0 flex justify-center items-center left-1/2 bottom-1 rounded-full bg">
				{charts?.map((_, index) => {
					return (
						<div
							key={index}
							className={
								
									 `h-2.5 w-2.5 ${index === current ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900' : 'bg-black'} inline-block cursor-pointer ml-2.5 rounded-full`
									
							}
							onClick={() => {
								setCurrent(index);
							}}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel