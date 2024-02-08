<?php
/**
 * Plugin Name:       Blockdev
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockdev
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function blockdev_blockdev_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'blockdev_blockdev_block_init' );

// $current_year = date("Y");

// if(! empty($attrributes['startingYear']) && ! empty($attrributes['showStartingYear'])){
// 	$display_date = $attrributes['startingYear'] . '-' . $current_year;
// } else {
// 	$display_date = $current_year;
// }