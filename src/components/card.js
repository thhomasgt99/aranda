import React from 'react'
import star from '../assets/icons/ic_star.svg'
import favorite from '../assets/icons/ic-favorite.svg'


export function Card({ image, title }) {

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={image} alt="" />
				<p>{title}</p>
			</div>
			<div className='card-info'>
				<div>
					<img src={star} alt="" />
					<p>5.0</p>
				</div>
				<img className='like' src={favorite} alt="" />
			</div>
		</div>
	)
}