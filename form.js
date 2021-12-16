// 'use strict'

// /**
//  * Fix num cores, allowing blanks to remain
//  */
// function fix_num_cores() {
//   let node_type_input = $('#batch_connect_session_context_node_type');
//   let node_type = node_type_input.val();
//   let num_cores_input = $('#num_cores');

//   if(num_cores_input.val() === '') {
//     return;
//   }

//   if(node_type === 'hugemem') {
//     set_ppn_owens_hugemem(num_cores_input);
//   } else {
//     set_ppn_owens_regular(num_cores_input);
//   }
// }

// /**
//  * Sets the PPN limits available for Owens hugemem nodes.
//  *
//  * hugemem reservations are always assigned the full node
//  *
//  * @param      {element}  num_cores_input  The input for num_cores
//  */
// function set_ppn_owens_hugemem(num_cores_input) {
//   const NUM_CORES = 48;
//   num_cores_input.attr('max', NUM_CORES);
//   num_cores_input.attr('min', NUM_CORES);
//   num_cores_input.val(NUM_CORES);
// }

// /**
//  * Sets the PPN limits available for non hugemem Owens nodes.
//  *
//  * @param      {element}  num_cores_input  The input for num_cores
//  */
// function set_ppn_owens_regular(num_cores_input) {
//   const NUM_CORES = 28;
//   num_cores_input.attr('max', NUM_CORES);
//   num_cores_input.attr('min', 0);
//   num_cores_input.val(Math.min(NUM_CORES, num_cores_input.val()));
// }

// /**
//  * Toggle the visibilty of a form group
//  *
//  * @param      {string}    form_id  The form identifier
//  * @param      {boolean}   show     Whether to show or hide
//  */
// function toggle_visibilty_of_form_group(form_id, show) {
//   let form_element = $(form_id);
//   let parent = form_element.parent();

//   if(show) {
//     parent.show();
//   } else {
//     form_element.val('');
//     parent.hide();
//   }
// }

// /**
//  * Toggle the visibilty of the license fields
//  *
//  * Academic: hidden
//  * Commercial: visible
//  */
// function toggle_license_field_visibility() {
//   let user_license_provider = $("#batch_connect_session_context_user_license_provider");

//   toggle_visibilty_of_form_group(
//     '#batch_connect_session_context_extern_license_server',
//     user_license_provider.val() === 'external'
//   );
//   toggle_visibilty_of_form_group(
//     '#batch_connect_session_context_extern_license_file',
//     user_license_provider.val() === 'external'
//   );
// }

// /**
//  * Sets the change handler for the node_type select.
//  */
// function set_node_type_change_handler() {
//   let node_type_input = $('#batch_connect_session_context_node_type');
//   node_type_input.change(node_type_input, fix_num_cores);
// }

// /**
//  * Sets the change handler for the user_is_commercial_user select.
//  */
// function set_user_license_provider_change_handler() {
//   let user_license_provider = $("#batch_connect_session_context_user_license_provider");
//   user_license_provider.change(toggle_license_field_visibility);
// }

// /**
//  * Install event handlers
//  */
// $(document).ready(function() {
//   // Set the max value to be what was set in the last session
//   fix_num_cores();
//   // Ensure that fields are shown or hidden based on what was set in the last session
//   toggle_license_field_visibility();

//   set_node_type_change_handler();
//   set_user_license_provider_change_handler();
// });