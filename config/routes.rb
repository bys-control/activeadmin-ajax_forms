Rails.application.routes.draw do

  # TODO: permitir levantar todos los nombres de espacios, no solamente admin:
  #ActiveAdmin.application.namespaces.keys.resources
  resource_collection = ActiveAdmin.application.namespaces[:admin].resources
  resources = resource_collection.select { |resource| resource.respond_to? :resource_class }
  pages = resource_collection.select { |resource| resource.is_a? ActiveAdmin::Page }

  resources.each do |resource|
    #TODO: Corregir la generación de la ruta para el quick_new
    if resource.dsl.ajax_form_enabled
      singular = resource.dsl.config.resource_name.singular
      plural = resource.dsl.config.resource_name.plural
      resource_name = resource.resource_class.to_s.downcase
      collection_path = resource.route_collection_path.slice(1..-1)
      prefix = resource.route_prefix

      route = "/#{collection_path}"
      collection_path_helper = "#{collection_path.gsub('/', '_')}"
      member_path_helper = "#{prefix}/#{resource_name}"
      get "#{route}/quick_new(/:name/:selectorid)" => "#{collection_path}#quick_new", as: "quick_new_#{member_path_helper}"
    end
  end

end
