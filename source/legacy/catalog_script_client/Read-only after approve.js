function onLoad() {
    if (!(g_form.getTableName() != "sc_req_item" || g_user.hasRole('admin'))) {
        g_form.setDisplay('variables.short_description', false);
        g_form.setDisplay('variables.due_date', false);
        g_form.setDisplay('variables.description', false);
        g_form.setDisplay('variables.cmdb_ci', false);
        g_form.setDisplay('variables.business_service', false);
        if (g_form.getValue('stage') != 'waiting_for_approval') {
            g_form.setDisplay('variables.assignment_group', false);
            g_form.setDisplay('variables.it_req_approval_group', false);
        }
    }
}