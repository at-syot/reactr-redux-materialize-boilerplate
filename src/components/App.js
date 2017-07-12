import React, { Component } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

class Modal extends Component {

	componentDidMount() {
		// $('#modal1').modal('modal');
		console.log($)
		console.log(jQuery)

		console.log($('#modal1').modal('open'))
	}

	render() {
		return (
			<div id="modal1" className="modal">
			    <div className="modal-content">
			      <h4>Modal Header</h4>
			      <p>A bunch of text</p>
			    </div>
			    <div className="modal-footer">
			      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
			    </div>
			  </div>
		)
	}
}

class App extends Component {

	constructor() {
		super();
		this.state = {
			isOpenModal: false
		}

		this.openModalTrigger = this.openModalTrigger.bind(this);
	}

	openModalTrigger() {
		this.setState({ isOpenModal: !this.state.isOpenModal })
	}

	render() {
		return (
		    <div className="app">
		        <a className="waves-effect waves-light btn">button</a>
		        <button onClick={this.openModalTrigger}>click</button>

		        <div className='row'>
		        	<div className='col s6'>yeah</div>
		        	<div className='col s6'>yeah</div>
		        </div>

		        <Modal {...this.state} />
		    </div>
		)
	}
}

export default App