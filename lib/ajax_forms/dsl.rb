module ActiveAdminAjaxForms
  module DSL
    attr_accessor :ajax_form_enabled

    #todo: falta completar el pasaje de opciones de configuracion para especificar los partials a renderizar
    def ajax_forms options={}
      default_options = {
          quick_new_partial: nil,
          quick_create_partial: nil,
          model: config.resource_class,
      }
      options = default_options.deep_merge(options)

      @ajax_form_enabled = true

      #todo: Posibilidad de especificar los atributos a devolver en el método find. Si no se especifica nada devolver todas las columnas
      collection_action :find, :method => :get do
        @model = resource_class
        search_term=params[:q]

        groupping_condition=params[:q][:g] rescue nil

        if !params[:q_id].blank?
          params[:q]={:id_equals => params[:q_id]} #selected element
        elsif groupping_condition.nil?
          params[:q]={:per=>50, :g=>{"0"=>{:name_contains=>search_term}}}
        end

        @q = @model.search(params[:q])
        @items = @q.result.map { |item| {:id => item.id, :text => item.to_s} }
        respond_to do |format|
          format.json { render :json => @items }
        end
      end

      collection_action :quick_new, :method => :get do
        @model = resource_class.new(:name => params[:name])
        options[:selector]=params[:selectorid]
        #crea una variable de instancia con el nombre del recurso para compatibilidad con partials normales
        instance_variable_set("@#{resource_instance_name.to_s}", @model)
        @remote = true
        @form_url = eval "quick_create_admin_#{resource_collection_name.to_s}_path"

        @id="#{Time.now.to_i.to_s}_#{resource_instance_name.to_s}"
        options[:id]=@id

        #todo: tiene que renderizar un formulario por defecto
        if options.fetch(:quick_new_partial).nil?
          render :nothing => true
        else
          render partial: options.fetch(:quick_new_partial), layout: 'application'
        end
      end

      collection_action :quick_create, :method => :post do
        resource_name=resource_class.class_name.downcase
        @model = resource_class.new(params[resource_name])
        @selector=options[:selector]
        @model.save
        @id=options[:id]
        render file: 'quick_response', layout: false
      end
    end
  end
end