export default {
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'number'},
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'position', title: 'Position', type: 'string'},
    {name: 'imageurl', title: 'ImgURL', type: 'image', options: {hotspot: true}},
    {name: 'feedback', title: 'Feedback', type: 'string'},
    {name: 'rating', title: 'Rating', type: 'number'},
    {
      name: 'bgcolor',
      title: 'Bg Color (e.g. bg-[#badbad])',
      type: 'string',
      initialValue: 'bg-[#badbad]',
    },
  ],
}
