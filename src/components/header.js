import React from 'react'
import homeImg from '../assets/icons/ic_home.svg'

export function Header(){
	return (
		<header>
			<div>Recipe<span>App</span></div>
			<ul className='headerMenu'>
				<li>Home</li>
				<li>Vegetarianos</li>
				<li>Platos Principales</li>
				<li>Tortas</li>
				<li>Comida Rápida</li>
				<li>Menú Niños</li>
				<li>Sopas</li>
			</ul>
			<img src={homeImg} alt="" />
		</header>
	)
}