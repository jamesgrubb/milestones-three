import { v2 as cloudinary } from 'cloudinary';

export const getServerSideProps = async ({ params }) => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_NAME,
		api_key: process.env.CLOUDINARY_API,
		api_secret: process.env.CLOUDINARY_SECRET,
		secure: true,
	});
	const milestone = cloudinary.video('Milestones/Video/Dancing', {
		autoplay: 'autoplay',
		// width: 960,
		// height: 540,
	});
	return {
		props: {
			milestone,
		},
	};
};

const Milestone = ({ milestone }) => {
	return <div dangerouslySetInnerHTML={{ __html: milestone }}></div>;
};

export default Milestone;
