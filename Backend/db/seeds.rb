puts "🌱 Seeding spices..."

# Seed your database here
action = Genre.create(name: "Action")
comedy = Genre.create(name: "Comedy")
drama = Genre.create(name: "Drama")

Movie.create(title:"Hitman", year:2007, image_url:"https://drive.google.com/uc?id=1EBuf29c5IA9QdwfdVvUXnLg8xx4ewTTK", genre_id:action.id)
Movie.create(title:"Déjà Vu", year:2006, image_url:"https://drive.google.com/uc?id=18WSDOHhcaWjGUoZ1m0pnUwGOMSwK9s1l", genre_id:action.id)
Movie.create(title:"Bad Influence", year:2022, image_url:"https://drive.google.com/uc?id=1bQ9LRZYdrHfTh4J0tw0Oxbg6_yRrHfkF", genre_id:drama.id)
Movie.create(title:"Dangerous Minds", year:1995, image_url:"https://drive.google.com/uc?id=1E969p1w145sEIqqLCGxwAYfGwHbAolI3", genre_id:drama.id)
Movie.create(title:"Money Talks", year:1997, image_url:"https://drive.google.com/uc?id=1kvldTJZ2qqXc3X3fo472Rnf_QFQDr3zm", genre_id:comedy.id)
Movie.create(title:"Baby Mama", year:2008, image_url:"https://drive.google.com/uc?id=1HTGTl68Js1ldok5p0UvHkOhAUEqApl2e", genre_id:comedy.id)
 



puts "✅ Done seeding!"
