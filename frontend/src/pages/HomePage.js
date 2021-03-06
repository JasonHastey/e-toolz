import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../redux/actions/productActions'

const HomePage = ({ match }) => {
	const dispatch = useDispatch()
	const productList = useSelector(state => state.productList)
	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	return (
		<div>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products &&
						products.map(fridge => (
							<Col sm={12} md={6} lg={4} key={fridge._id}>
								<Product product={fridge} />
							</Col>
						))}
				</Row>
			)}
		</div>
	)
}

export default HomePage
