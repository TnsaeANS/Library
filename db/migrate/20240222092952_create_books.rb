class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :isbn
      t.string :genre
      t.date :pub_date
      t.string :status

      t.timestamps
    end
  end
end
