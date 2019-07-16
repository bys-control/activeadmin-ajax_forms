$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "ajax_forms/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "ajax_forms"
  s.version     = AjaxForms::VERSION
  s.authors     = ["Guillermo Bisheimer, Christian Pfarher"]
  s.email       = ["gbisheimer@bys-control.com.ar, c.pfarher@gmail.com"]
  s.homepage    = "https://github.com/bys-control/activeadmin-ajax_forms"
  s.summary     = "Allow search and fast creation of records on html selectors using ajax forms in ActiveAdmin with formtastic"
  s.description = "Allow search and fast creation of records in selectors (by select2 plugin) in ActiveAdmin with Formtastic. It useg modal forms for new records submitted using AJAX"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", ">= 4"
  s.add_dependency "activeadmin"
  s.add_dependency 'kaminari', '>= 1.0.1'
  s.add_dependency 'ransack', '~> 1.8.2'
  s.add_dependency 'webpack-rails', '~> 0.9.9'

  s.add_development_dependency "sqlite3", "~> 1.3.11"
  s.add_development_dependency "devise", "~> 4.2.0"
  s.add_development_dependency "pry", "~> 0.10.4"
  s.add_development_dependency "pry-byebug", "~> 3.4.0"
  s.add_development_dependency 'foreman'

end
