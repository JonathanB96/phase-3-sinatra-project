require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/movies" do
    movies= Movie.all 
    movies.to_json
    
  end
  
  get "/movies/:title" do
    # binding.pry
    movies = Movie.where("title LIKE ?", params[:title] + "%")
    movies.to_json
  end



end
