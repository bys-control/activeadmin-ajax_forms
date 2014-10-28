activeadmin_ajax-forms
======================

ActiveAdmin plugin that allows to create/edit related models on the fly using modal popup forms.
================================================================
#TODO: translate to english! 

Pasos para usarla

* Referenciar a la gema en el Gemfile de la app host: 

```
#!ruby

gem 'ajax_forms', path: 'engines/ajax_forms'
```
* Agregar al active_admin.js.cofee de la app host:

```
#!ruby

#= require ajax_forms/application
```

* En los resource que se quieran usar agregar:

```
#!ruby

  ajax_forms :quick_new_partial => 'item'
```
donde "item" es el nombre del resource

* Crear el partial con el form de la sig. manera:

```
#!ruby

<%= semantic_form_for [:admin, @item], remote: (defined? @remote) ? true : false, url: @form_url, :builder => FormtasticBootstrap::FormBuilder do |f| %>

<div id="quick-add-errors"></div> <!-- Agregar para mostrar errores -->

# Poner la clase select2-autocomplete para que funcione el selector con select2
# Poner la clase ajax si se quiere hacer la búsqueda de los resultados en el selector mediante ajax
# En el atributo data se deben pasar las opciones:
#  - multiple (boolean): true (default) - indica si el selector es simple o multiple (aún no implementado)
#  - source: path a la función find donde se devuelve key y value a mostrar en el selector. @todo: modificar para que si no se pasa nada se tome la función por defecto de la gema. En caso contrario se puede sobreescribir por una propia
#  - modal: path del controller que renderiza el partial en el modal fancybox

<%= f.input :item_id, :label=>false, :as=>:string, :input_html=>{:class => "select2-autocomplete ajax input-sm", :data => {:multiple=>false, :source => find_admin_items_path, :modal=>quick_new_admin_items_path}} %>

<%= end %>
```
