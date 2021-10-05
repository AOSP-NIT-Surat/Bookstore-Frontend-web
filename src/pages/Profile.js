import React from 'react';
import data from '../temp/profile_data.json';
import phone from '../assets/telephone-fill.svg';
import mail from '../assets/envelope-fill.svg';
import '../styles/Profile.css';

export default function User() {
	const user = data.users.map(user => (
		<div key={user.mailID}>
			<div className="user_profile">
				<div className="user_heading">
					<div className="user_image">
						<img src={user.image} alt="" className="user_img" />
					</div>
					<div className="user_personal">
						<h3 className="user_name personal">{user.name}</h3>
						<h4 className="user_phone personal">
							<img src={phone} alt="" className="icon" />{' '}
							{user.phone}{' '}
						</h4>
						<h4 className="user_mail personal">
							<img src={mail} alt="" className="icon" />{' '}
							{user.mailID}{' '}
						</h4>
						<p className="user_address personal">
							{' '}
							<i class="fas fa-map-marker-alt"></i>{' '}
							{user.Address.House}, {user.Address.Street},{' '}
							{user.Address.Landmark}, {user.Address.City},{' '}
							{user.Address.District}, {user.Address.State} -{' '}
							{user.Address.Pincode}
						</p>
					</div>
				</div>
				<div className="order_table">
					<h2>Your Orders!</h2>
					<table>
						<thead>
							<tr>
								<th>Order ID</th>
								<th>Date</th>
								<th>Fulfillment</th>
								<th>Payment</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{user.order.map(ord => (
								<tr key={ord.OrderId}>
									<td>
										<a href="/">{ord.OrderId}</a>
									</td>
									<td>{ord.Date}</td>
									<td>{ord.Fulfillment}</td>
									<td>{ord.Payment}</td>
									<td>{ord.Total}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	));
	return <div className="user_page">{user}</div>;
}
