'use strict'


/**
 * Toggle the visibilty of the license fields
 *
 * Academic: hidden
 * Commercial: visible
 */
function toggle_license_field_visibility() {
  let user_license_provider = $("#batch_connect_session_context_user_license_provider");

  toggle_visibilty_of_form_group(
    '#batch_connect_session_context_extern_license_server',
    user_license_provider.val() === 'external'
  );
  toggle_visibilty_of_form_group(
    '#batch_connect_session_context_extern_license_file',
    user_license_provider.val() === 'external'
  );
}

/**
 * Sets the change handler for the node_type select.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change(node_type_input, fix_num_cores);
}

/**
 * Sets the change handler for the user_is_commercial_user select.
 */
function set_user_license_provider_change_handler() {
  let user_license_provider = $("#batch_connect_session_context_user_license_provider");
  user_license_provider.change(toggle_license_field_visibility);
}

/**
 * Install event handlers
 */
$(document).ready(function() {
  // Set the max value to be what was set in the last session
  fix_num_cores();
  // Ensure that fields are shown or hidden based on what was set in the last session
  toggle_license_field_visibility();

  set_node_type_change_handler();
  set_user_license_provider_change_handler();
});