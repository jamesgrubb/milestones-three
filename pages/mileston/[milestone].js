import { v2 as cloudinary } from 'cloudinary';

export const getServerSideProps = async ({ params }) => {
	console.log(
		'🚀 ~ file: [milestone].js ~ line 4 ~ getServerSideProps ~ params',
		params
	);
	const { milestone } = params;
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_NAME,
		api_key: process.env.CLOUDINARY_API,
		api_secret: process.env.CLOUDINARY_SECRET,
		secure: true,
	});
	const video = cloudinary.video('Milestones/Video/Dancing', {
		autoplay: 'autoplay',
		controls: true,
		// width: 960,
		// height: 540,
		transformation: [
			{ overlay: 'Milestones:bg' },
			{
				x: 0,
				y: 0,
				width: 300,
				height: 300,
				background: 'red',
			},
			{
				color: 'hotpink',
				overlay: {
					font_family: 'Bogam.otf',
					font_size: 300,
					text: milestone,
				},
			},
			{
				flags: ['layer_apply'],
				x: 0,
				y: 0,
				width: 100,
				height: 100,
				crop: 'fill',
			},
		],
	});
	return {
		props: {
			video,
		},
	};
};
const Milestone = ({ video }) => {
	return <div dangerouslySetInnerHTML={{ __html: video }}></div>;
};

export default Milestone;
