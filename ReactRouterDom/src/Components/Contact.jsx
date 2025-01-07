import React from "react";
import './Contact.css'

const Contact = () => {
	return (
		<>
			<h1 id="chead">Contact Us</h1>
			<section id="contact">
				<div id="cinfo">
					<h3>If you have any complaints please contact us on details given below. Lorem ipsum dolor sit amet non quidem earum saepe, harum quas, voluptates dicta nemo sunt, alias aliquid assumenda nihil!</h3>
					<br />
					<h3>Name: Abcde Fghik</h3>
					<h3>Contact At: +91 1234567890</h3>
					<h3>Email: example@gmail.com</h3>
				</div>
				<div id="cmsg">
					<form id="cform">
						<label>Name: </label>
						<input type="text" />
						<label>Email: </label>
						<input type="email" />
						<label>Enter your message: </label>
						<textarea cols="50"></textarea>
						<input type="submit" />
					</form>
				</div>
			</section>
		</>
	)
}

export default Contact