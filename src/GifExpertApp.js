import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Coding'])

	return (
		<>
			<h2>Gift Expert App</h2>
			<h3>Input text for search</h3>
			<br />
			<section>
				<img id='cofee' src='/Open_Doodles.png' alt='' />
			</section>
			<AddCategory setCategories={setCategories} />
			<br />
			{categories.map(category => (
				<GiftGrid key={category} category={category} />
			))}
		</>
	)
}

export default GifExpertApp
