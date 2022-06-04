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

  post '/movies' do
    # binding.pry    
    new_movie = Movie.create(
      title:params[:title], 
      year:params[:year], 
      image_url:params[:image_url],
      genre_id: Genre.find_by(name: params[:genre]).id)
      
    new_movie.to_json
    
  end



end
