class CreateRequests < ActiveRecord::Migration[7.1]
  def change
    create_table :requests do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :isbn, null: true
      t.string :edition, null: true
      t.string :publisher, null: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
