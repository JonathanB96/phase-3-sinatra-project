require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # movies GET requests 
  # Add your routes here

  #Movies GET requests
  get "/movies" do
    movies= Movie.all 
    movies.to_json
   
  end
  #search
  get "/movies/:title" do
    # binding.pry
    movies = Movie.where("title LIKE ?", params[:title])
    movies.to_json
  end
  #Movies POST requests
  post '/movies' do
    # binding.pry  
    
    new_movie = Movie.create(

      title:params[:title], 
      year:params[:year], 
      image_url:params[:image_url],
      genre_id: Genre.find_by("name LIKE ?", params[:genre]).id )
      
    new_movie.to_json
    
  end

  #Movies PATCH request

  patch '/movies/:movie' do
    #binding.pry
    movies = Movie.find_by("title LIKE ?",  params[:movie])
    
    movies.update(
      title: params[:newTitle],
      year: params[:year],
      image_url: params[:image_url],
      genre_id: Genre.find_by(name: params[:genre]).id)
    movies.to_json
  end
  #Movies DELETE request 


    delete '/movies/:id' do
      # binding.pry
      movie = Movie.find(params[:id])
      movie.destroy
      movie.to_json
    end

    #Genres GET requests

    get '/genres' do
      genres = Genre.all
      genres.to_json
    end
    
    get '/genres/:name' do
      # binding.pry
      if params[:name] == "Sort by genre"
        movies = Movie.all
        movies.to_json
      else
      genre_id = Genre.find_by(name: params[:name]).id
      movies = Movie.where(genre_id: genre_id)
      movies.to_json
      end
      
    end
    #Genres POST request

    post '/genres' do

      new_genre = Genre.create(name: params[:name])
      new_genre.to_json
    end
    #Genres POST request
    delete '/genres/:name' do 

     genre = Genre.find_by(name: params[:name])
     genre.destroy
     genre.to_json
    end


    
end 
