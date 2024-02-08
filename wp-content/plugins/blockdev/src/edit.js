import { useEffect } from "react";
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/** WordPress components that create the necessary UI elements for the block 
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 ***/
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;
	const currentYear = new Date().getFullYear().toString();

	useEffect(() => {
		if(currentYear !== fallbackCurrentYear)	{
			setAttributes({ fallbackCurrentYear: currentYear});
		}
	}, [currentYear, fallbackCurrentYear, setAttributes]);

	let displayDate = (showStartingYear && startingYear) ? startingYear + "-" + currentYear : currentYear;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "blockdev")}>
					<ToggleControl
					checked = { !! showStartingYear}
					label = {__("Show starting Year", "blockdev")}
					onChange={() => setAttributes({
						showStartingYear: !showStartingYear,
					})}
					/>
					{ showStartingYear && (
						<TextControl 
						label={__("Starting year", "blockdev")} 
						value={startingYear || ""}
						onChange={(value) => setAttributes( { startingYear: value })}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>© { displayDate }</p>
		</>
	);
}
