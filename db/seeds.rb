300.times do
  name = Faker::Name.name
  Friend.create(
    name: name,
    location: Faker::Address.city,
    age: Faker::Number.number(2),
    gender: Faker::Gender.binary_type,
    quote: Faker::MichaelScott.quote,
    photo: Faker::LoremFlickr.grayscale_image("100x120", ['people'], name)
  )
end