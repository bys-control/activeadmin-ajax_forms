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
  s.summary     = "Allow fast creation of records using ajax forms"
  s.description = "Allow fast creation of records using modal forms submitted using AJAX"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4"
  #s.add_dependency "activeadmin", "~> 0"

  s.add_dependency "jquery", "~> 0"
  s.add_dependency "select2-rails"
  s.add_dependency 'chosen-rails', "~> 1.2.0"
  s.add_dependency "fancybox2-rails", "~> 0.2.8"
  s.add_dependency "activeadmin-select2"
  s.add_dependency "will_paginate", "~> 3.0.4"
  s.add_development_dependency "sqlite3", "~> 0"
end
