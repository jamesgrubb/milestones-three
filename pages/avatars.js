import React from 'react';

export const getStaticProps = async () => {
	const avatars = await fetch(
		'https://last-airbender-api.herokuapp.com/api/v1/characters/avatar'
	).then((r) => r.json());

	console.log(
		'🚀 ~ file: avatars.js ~ line 5 ~ getStaticProps ~ avatars',
		avatars
	);

	return {
		props: {
			avatars,
		},
	};
};

const Avatars = ({ avatars }) => {
	return (
		<div>
			<h1>Avatars</h1>
			<ul>
				{avatars.map((avatar) => {
					return <li key={avatar._id}>{avatar.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Avatars;
