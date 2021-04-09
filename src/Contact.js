import React from 'react';
import './App.css';
export default function Contact() {
	return (
		<div className='page-container'>
			<h1>Contact page</h1>

			<div className='footer_text'>
				<div className='footer_item'>
					<a href='https://github.com/Mleng89'>
						<a className='github'>
							<img src='/github.svg' width='250rem' height='50rem' />
						</a>
					</a>
				</div>

				<div className='footer_item'>
					<a href='https://www.linkedin.com/in/matthew-leng/'>
						<a>
							<img src='/linkedin.svg' width='250rem' height='50rem' />
						</a>
					</a>
				</div>
				<div className='footer_item'>
					<a href='https://twitter.com/matthewleng'>
						<a>
							<img src='/twitter.svg' width='250rem' height='50rem' />
						</a>
					</a>
				</div>
				<div className='footer_item'>
					<a href='mailto:mleng89@gmail.com' className='email_link'>
						Contact me
					</a>
				</div>
			</div>
		</div>
	);
}
