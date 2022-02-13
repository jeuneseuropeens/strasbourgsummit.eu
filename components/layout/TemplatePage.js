import TemplateBase from './TemplateBase';
import Banner from './Banner';

export default function TemplatePage({children, title, description, bannerImage}) {
	return (
		<TemplateBase title={title}>
			<Banner title={title} description={description} bannerImage={bannerImage} />

			{children}
		</TemplateBase>
	);
}
