export default {
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'number'},
    {name: 'institution', title: 'Institution', type: 'string'},
    {name: 'by', title: 'Presented By', type: 'string'},
    {name: 'title', title: 'Title (Award of ...)', type: 'string'},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'date', title: 'Date', type: 'date'},
    {
      name: 'description',
      title: 'description',
      type: 'text',
      initialValue: 'Awarded as an excellent',
    },
    {
      name: 'bgcolor',
      title: 'Bg Color (e.g. bg-[#badbad])',
      type: 'string',
      initialValue: 'bg-[#badbad]',
    },
  ],
}
