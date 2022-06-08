import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GSAP = () => {

	useEffect(() => {
		const Titulo = document.querySelector('.Titulo');

		gsap.from(Titulo, { y: 50, x:100, duration: 1 })
	}, [])


	return (
		<div className='Container'>
			<div className='Wrapper'>
				<div className='Info'>
					<div className='CenterInfo'>
						<h2 className='Titulo'>Welcome to </h2>
						<h2>introduction</h2>
						<h1>gsap</h1>
						<h2>+</h2>
						<h1>React</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, officia architecto dolore perspiciatis omnis ab, quisquam explicabo, ducimus est earum blanditiis reprehenderit sequi non iure iusto dicta animi nam expedita.</p>
						<button>get started</button>
					</div>
				</div>
				<div className='Imagenes'></div>
			</div>
		</div>
	)
}

export default GSAP;