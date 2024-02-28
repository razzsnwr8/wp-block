import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton, ColorPicker } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { content, alignment, color } = attributes;
	const [isColorPickerOpen, setIsColorPickerOpne] = useState(false);

	const onChangeContent = (newContent) => {
		setAttributes( { content: newContent } );
	};

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const onChangeColor = (newColor) => {
		setAttributes({ color: newColor.hex });
	};

	return (
		<>
			<div { ...blockProps }>
				<BlockControls>
					<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />	
					<Toolbar>
						<ToolbarButton
						icon="admin-customizer"
						onClick={() => {
							setIsColorPickerOpne(!isColorPickerOpen)
						}}
						title={__("Title Color")}
						isActive={isColorPickerOpen}
						/>
						{isColorPickerOpen && (
							<ColorPicker color={color} onChangeComplete={onChangeColor} />
						)}
					</Toolbar>
				</BlockControls>
					<RichText 
						tagName='p' value={content} 
						allowedFormats={['core/bold', 'core/italic']} 
						onChange={onChangeContent} 
						placeholder={ __( "Content..." ) } 
						style={{ textAlign: alignment, color:color }} 
						keepPlaceholderOnFocus
						formattingControls={['bold', 'italic', 'link']} 
					/>
			</div>
		</>
	);
};