import React, { useState, useEffect } from 'react'
import { Card } from '../components/card'
import Ojingeo_muchim_1 from '../assets/Ojingeo-muchim-1.png'
import Ojingeo_muchim_5 from '../assets/Ojingeo-muchim-5.png'
import Ojingeo_muchim from '../assets/Ojingeo-muchim.png'
import cherry from '../assets/cherry.png'



export function Slider() {
	const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=58fb3ddc0e1e4e29b5a48bad30187021'
	const [apiData, setApiData] = useState([])
	const fetchApi = async () => {
		const response = await fetch(url)
		const responseJson = await response.json()
		setApiData(responseJson.results)
	}

	useEffect(() => {
		fetchApi()
	}, [])

	return (
		<div className='slider'>
			{
				!apiData ?
				'Cargando...' :
				apiData.map(item => <Card key={item.id} title={item.title} image={item.image} />)
			}
		</div>
	)
}