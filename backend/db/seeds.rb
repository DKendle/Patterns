# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

crochetcar = Pattern.create(name: "Crocheted Car", difficulty: "Beginner", description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
cathat = Pattern.create(name: "Cat Hat", difficulty: "Easy", description: "Contrary to popular belief, Lorem Ipsum is not simply random text.")


Comment.create([
    {title: "Amazing", description: "I absolutely love this", pattern_id: 1},
    {title: "Flipping Adorable", description: "My cats hate it, but I love it", pattern_id: 2}
])