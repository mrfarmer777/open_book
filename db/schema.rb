# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_27_194615) do

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.integer "pages"
    t.string "genres"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entries", force: :cascade do |t|
    t.integer "minutes_read"
    t.integer "entry_page"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "book_id"
    t.integer "user_id"
    t.integer "user_book_id"
    t.string "content"
    t.string "reaction"
    t.integer "pages"
    t.float "entry_percentage"
  end

  create_table "sections", force: :cascade do |t|
    t.string "name"
    t.integer "period"
    t.integer "teacher_id"
    t.date "start_date"
    t.date "end_date"
    t.boolean "public"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_books", force: :cascade do |t|
    t.integer "user_id"
    t.integer "book_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pages"
    t.integer "pages_read", default: 0
    t.string "status", default: "Planned"
    t.integer "reads", default: 0
    t.float "rating", default: 0.0
  end

  create_table "user_sections", force: :cascade do |t|
    t.integer "user_id"
    t.integer "section_id"
    t.boolean "active"
    t.boolean "approved", default: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "type"
    t.integer "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
