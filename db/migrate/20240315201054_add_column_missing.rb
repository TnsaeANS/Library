class AddColumnMissing < ActiveRecord::Migration[7.1]
  def change
    add_column :lends, :returned, :boolean, default: false
  end
end
