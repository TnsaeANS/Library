# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_03_15_201054) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "title", null: false
    t.string "author", null: false
    t.string "isbn", null: false
    t.string "genre", null: false
    t.date "pub_date", null: false
    t.string "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lends", force: :cascade do |t|
    t.date "lent_date", null: false
    t.date "return_date", null: false
    t.bigint "user_id", null: false
    t.bigint "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "returned", default: false
    t.index ["book_id"], name: "index_lends_on_book_id"
    t.index ["user_id"], name: "index_lends_on_user_id"
  end

  create_table "requests", force: :cascade do |t|
    t.string "title", null: false
    t.string "author", null: false
    t.string "isbn"
    t.string "edition"
    t.string "publisher"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_requests_on_user_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.date "reservation_date", null: false
    t.bigint "user_id", null: false
    t.bigint "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_reservations_on_book_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "email", null: false
    t.string "user_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "lends", "books"
  add_foreign_key "lends", "users"
  add_foreign_key "requests", "users"
  add_foreign_key "reservations", "books"
  add_foreign_key "reservations", "users"
end
