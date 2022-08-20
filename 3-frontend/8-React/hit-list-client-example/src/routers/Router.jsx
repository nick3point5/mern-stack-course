import React from 'react'
import { Home, NewPage, EditPage, Details } from '@/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='target/new' element={<NewPage />}/>
				<Route path='target/:id' element={<Details />}/>
				<Route path='target/edit/:id' element={<EditPage />}/>
			</Routes>
		</BrowserRouter>
	)
}
