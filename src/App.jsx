import React from 'react'

export default function App() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-700 text-white p-6">
			<div className="max-w-2xl w-full bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-4">Hello — Tailwind is working</h1>
				<p className="text-slate-200 mb-6">This is a simple Vite + React page using Tailwind CSS.</p>

				<div className="flex gap-3">
					<button className="px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600">Primary</button>
					<button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Secondary</button>
				</div>
			</div>
		</div>
	)
}

