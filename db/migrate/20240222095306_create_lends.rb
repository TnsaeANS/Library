class CreateLends < ActiveRecord::Migration[7.1]
  def change
    create_table :lends do |t|
      t.date :lent_date, null: false
      t.date :return_date, null: false
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
