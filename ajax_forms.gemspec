$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "ajax_forms/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "ajax_forms"
  s.version     = AjaxForms::VERSION
  s.authors     = ["Guillermo Bisheimer, Christian Pfarher"]
  s.email       = ["gbisheimer@bys-control.com.ar, c.pfarher@gmail.com"]
  s.homepage    = ""
  s.summary     = "Allow fast creation of records using ajax forms"
  s.description = "Allow fast creation of records using ajax forms"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.1.5"
  s.add_dependency "activeadmin", ">= 0"

  s.add_development_dependency "sqlite3"
end
