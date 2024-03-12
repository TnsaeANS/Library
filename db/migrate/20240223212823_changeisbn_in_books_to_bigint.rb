class ChangeisbnInBooksToBigint < ActiveRecord::Migration[7.1]
  def change
    change_column :books, :isbn, :string
  end
end
