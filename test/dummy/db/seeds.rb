# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = [
    { email: 'admin@example.com', password: 'password', password_confirmation: 'password'},
]

users.each do |v|
  user_created = AdminUser.where(email: v[:email]).first_or_initialize(v)
  if user_created.valid? && user_created.new_record?
    user_created.save!
    puts "User created! email: #{user_created.email} - password: #{user_created.password}"
  end
end
