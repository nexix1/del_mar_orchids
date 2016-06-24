require "sinatra"
require "sendgrid-ruby"

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

post "/email_response" do
	client = SendGrid::Client.new do |c|   
		c.api_key = ENV['SENDGRID_API_KEY'] 
	end

	mail = SendGrid::Mail.new do |m|
		m.to = "oliverography@gmail.com"
		m.from = params[:from]
		m.subject = params[:subject]
		m.text = params[:body]
	end

	res = client(mail)
	puts res.code
	puts res.body

	redirect("/")
end