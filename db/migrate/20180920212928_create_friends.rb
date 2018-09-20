class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :location
      t.string :age
      t.string :gender
      t.string :quote
      t.string :photo

      t.timestamps
    end
  end
end
