import React from 'react';

export const getStaticProps = async ({ params }) => {
	const results = await fetch(
		`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${params.characterId.replace(
			/\-/g,
			'+'
		)}`
	).then((r) => r.json());

	return {
		props: {
			character: results[0],
		},
	};
};

export const getStaticPaths = async () => {
	const characters = await fetch(
		'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500'
	).then((r) => r.json());

	return {
		paths: characters.map((character) => {
			const characterId = character.name.toLowerCase().replace(/ /g, '-');
			return {
				params: {
					characterId,
				},
			};
		}),
		fallback: false,
	};
};

const Character = ({ character }) => {
	return (
		<div>
			<h1>{character.name}</h1>
			<img src={character.photoUrl} alt={character.name} />
			<p>Affiliation: {character.affiliation}</p>
		</div>
	);
};

export default Character;
