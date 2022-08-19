import React from 'react'
import { Home, NewPage, EditPage, Details } from '@/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/new' element={<NewPage />}/>
				<Route path='/:id' element={<Details />}/>
				<Route path='/edit/:id' element={<EditPage />}/>
			</Routes>
		</BrowserRouter>
	)
}
