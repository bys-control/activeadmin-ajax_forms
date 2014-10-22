require "ajax_forms/version"
require "ajax_forms/engine"
require "ajax_forms/dsl"

# ensure that ActiveAdmin is loaded
require "active_admin"

module ActiveAdminAjaxForms
end

# Permite que los helpers estén accesibles desde los Resources de Active Admin
ActiveAdmin::ResourceDSL.send :include, ActiveAdminAjaxForms::DSL