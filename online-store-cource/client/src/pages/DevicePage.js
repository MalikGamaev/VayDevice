import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import '../style/style.css'



const DevicePage = () => {
	const device = { id: 1, name: 'Iphone 14 pro', price: 100000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/1927699/img_id2340870575975482082.jpeg/orig' }
	const description = [
		{ id: 1, title: 'Оперативная память', description: '6 гб' },
		{ id: 1, title: 'Камера', description: '48 мп' },
		{ id: 1, title: 'Процессор', description: 'Apple A16 Bionic' },
		{ id: 1, title: 'Кол-во ядер', description: '6' },
		{ id: 1, title: 'Аккумулятор', description: '3200' },
	]
	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={device.img} />
				</Col>
				<Col md={4}>
					<Form className='d-flex flex-column align-items-center'>

						<h2>{device.name}</h2>
						<div className='image'>
							{device.rating}
						</div>


					</Form>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
					>
						<h3>От: {device.price} руб.</h3>
						<Button variant='outline-dark'>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column m-3'>
				<h1>Характеристики</h1>
				{description.map((info, index) =>
					<Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
						{info.title}: {info.description}
					</Row>
				)}
			</Row>

		</Container >
	);
};

export default DevicePage;