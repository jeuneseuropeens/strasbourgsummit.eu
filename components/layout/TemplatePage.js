import TemplateBase from './TemplateBase';
import Banner from './Banner';

export default function TemplatePage({children, title, description, bannerImage}) {
	return (
		<TemplateBase title={title}>
			{ title && (
				<Banner title={title} description={description} bannerImage={bannerImage} />
			)}

			{children}
		</TemplateBase>
	);
}

TemplatePage.defaultProps = {
	bannerImage: '/17547117_1115094925303458_1490815375177705789_o.jpeg'
}
