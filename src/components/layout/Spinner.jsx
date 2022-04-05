import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
	return (
		<div className='mt-20 w-100'>

			<img width={180} className='mx-auto text-center' src={spinner} alt="loading" />
		</div>
	)
}

export default Spinner