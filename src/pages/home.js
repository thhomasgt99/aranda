import React, { useState, useEffect } from 'react'
import { Header } from '../components/header'
import { ImgFondo } from '../components/imgFondo'
import { SectionMenu } from '../components/sectionMenu'
import { TituloReceta } from '../components/tituloReceta'
import { Slider } from '../containers/slider'
import { Foooter } from '../components/footer'
import { TituloRecetasTodos } from '../components/tituloRecetasTodos'

export function Home() {
	return (
		<>
			<Header />
			<ImgFondo />
			<TituloRecetasTodos />
			<SectionMenu />
			<TituloReceta />
			<Slider />
			<Foooter />
		</>
	)
}