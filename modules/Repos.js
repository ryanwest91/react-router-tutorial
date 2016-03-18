//modules/Repos.js

import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink.js'

export default React.createClass({

	contextTypes: {
		router: React.PropTypes.object
	},

	handleSubmit(event){
		event.preventDefault()
		const userName = event.target.elements[0].value
		const repo = event.target.elements[1].value
		const path = `/repos/${userName}/${repo}`
		// console.log(path)
		this.context.router.push(path)
	},


	render(){
		return(

			<div>
				<h2>Repos</h2>
				<ul>
					<li>
						<NavLink to="/repos/rackt/react-router">React Router</NavLink>
					</li>
					<li>
						<NavLink to="/repos/facebook/react">React</NavLink>
					</li>

					<li>
						<form onSubmit={this.handleSubmit}>
							<input type="text" placeholder="userName"/> / {' '}
							<input type="text" placeholder="repo"/>{' '}
							<button type="submit">Go</button>
						</form>
					</li>
				</ul>

				{this.props.children}

			</div>
		)
	}
})