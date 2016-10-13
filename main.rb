require "sinatra"
require "sendgrid-ruby"
include SendGrid

get "/" do
  erb :index
end

get "/care1" do
  erb :care1
end

get "/care2" do
  erb :care2
end

get "/care3" do
  erb :care3
end

get "/care4" do
  erb :care4
end

get "/care5" do
  erb :care5
end

configure(:development){set :database, "sqlite3:blog.sqlite3"}

post "/email_response" do
  from = Email.new(email: params[:from])
  subject = params[:subject]
  to = Email.new(email: 'oliverography@gmail.com')
  content = Content.new(type: 'text/plain', value: params[:body])
  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)
  puts response.status_code
  puts response.body
  puts response.headers

  redirect("#contact")
end