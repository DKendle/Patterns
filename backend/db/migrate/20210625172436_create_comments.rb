class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :title
      t.string :description
      t.integer :pattern_id

      t.timestamps
    end
  end
end
