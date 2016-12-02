class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :photoUrl
      t.string :color
      t.integer :year
      t.references :car, index: true, foreign_key: true
      t.timestamps
    end
  end
end
