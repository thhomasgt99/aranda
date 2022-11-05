import React from 'react'
import ic_kids from '../assets/icons/ic_kids.svg'
import ic_vegetarian from '../assets/icons/ic_vegetarian.svg'
import ic_fast from '../assets/icons/ic_fast-food.svg'
import ic_soup from '../assets/icons/ic_soup.svg'
import ic_cake from '../assets/icons/ic_cake.svg'
import ic_main from '../assets/icons/ic_main.svg'


export function SectionMenu() {
	return (
		<div className='sectionMenu'>
			<ul>
				<li><img src={ic_vegetarian} alt="" />Vegetarianos</li>
				<li><img src={ic_main} alt="" />Principales</li>
				<li><img src={ic_cake} alt="" />Tortas</li>
				<li><img src={ic_fast} alt="" />Rápida</li>
				<li><img src={ic_kids} alt="" />Menu Niños</li>
				<li><img src={ic_soup} alt="" />Sopas</li>
			</ul>
		</div>
	)
}