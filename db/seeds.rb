# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    {
    name: "Book Worm",
    email: "bookworm@trial.com",
    password: "password",
    type: "student",
    age: "15",
    },
    {
    name: "Bad Reader",
    email: "badreader@trial.com",
    password: "password",
    type: "student",
    age: "16",
    },
    {
    name: "Ms. Nelson",
    email: "msnelson@trial.com",
    password: "password",
    type: "teacher",
    age: "25"
    }
)
    
Section.create(
    name: "English 2",
    period: 2,
    teacher_id: User.find_by(name: "Ms. Nelson").id,
    start_date: Date.today,
    end_date: Date.today >> 12,
    active: true,
    public: true,
)
    
UserSection.create(
    {
        user_id: User.find_by(name: "Book Worm").id,
        section_id: Section.find_by(name: "English 2"),
        active: true,
    },
    {
        user_id: User.find_by(name: "Bad Reader").id,
        section_id: Section.find_by(name: "English 2"),
        active: true,
    }
)

hp = Book.create(
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        pages: 336,
        genres: "Young Adult, Fantasy",
    }
)

UserBook.create(
    {
        user_id: User.find_by(name: "Book Worm").id,
        book_id: hp.id,
        pages: hp.pages,
    },
    {
        user_id: User.find_by(name: "Bad Reader").id,
        book_id: hp.id,
        pages: hp.pages,
    }
)


Entries.create(
    { book_id: hp.id, time: 10, pages: 8, user_id: User.find_by(name: "Book Worm").id},
    { book_id: hp.id, time: 15, pages: 14, user_id: User.find_by(name: "Book Worm").id},
    { book_id: hp.id, time: 12, pages: 32, user_id: User.find_by(name: "Book Worm").id},
    { book_id: hp.id, time: 11, pages: 16, user_id: User.find_by(name: "Book Worm").id},
    { book_id: hp.id, time: 27, pages: 31, user_id: User.find_by(name: "Book Worm").id},
    { book_id: hp.id, time: 56, pages: 46, user_id: User.find_by(name: "Book Worm").id},
    { book_id: hp.id, time: 23, pages: 34, user_id: User.find_by(name: "Book Worm").id},
)

