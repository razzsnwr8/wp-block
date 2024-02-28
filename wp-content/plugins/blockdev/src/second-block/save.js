import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const { content, alignment } = attributes;

	return (
		<>
			<div { ...blockProps } className={`my-block align${alignment}`}>
				<RichText.Content tagName='p' value={ content } style={{ textAlign: alignment }} />
			</div>
		</>
	);
};
