export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'number'},
    {name: 'skill', title: 'Skill', type: 'string'},
    {name: 'imageurl', title: 'ImgURL', type: 'image', options: {hotspot: true}},
    {
      name: 'bgcolor',
      title: 'Bg Color (e.g. bg-[#badbad])',
      type: 'string',
      initialValue: 'bg-[#badbad]',
    },
  ],
}
