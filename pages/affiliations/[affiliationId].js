export const getServerSideProps = async ({ params }) => {
	const affiliationId = params.affiliationId.replace(/\-/g, '+');
	const characters = await fetch(
		`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`
	).then((r) => r.json());

	return {
		props: {
			characters,
			affiliationId,
		},
	};
};

const Affiliations = ({ characters, affiliationId }) => {
	return (
		<div>
			<h1>
				Affiliation matching {'"'}
				{affiliationId}
				{'"'}
			</h1>
			<ul>
				{characters.map((character) => {
					return (
						<li key={character._id}>
							<h2>{character.name}</h2>
							<img
								src={character.photoUrl}
								alt={character.name}
							/>
							<p>Affiliation: {character.affiliation}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Affiliations;
