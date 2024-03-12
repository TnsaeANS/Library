class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.integer :isbn, null: false
      t.string :genre, null: false
      t.date :pub_date, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
