class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|

      t.string :title
      t.integer :year
      t.string :image_url
      t.integer :genre_id #foreign key
      t.timestamps

    end
  end
end
