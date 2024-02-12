export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'number'},
    {name: 'institution', title: 'Institution', type: 'string'},
    {name: 'imageurl', title: 'ImgURL', type: 'image', options: {hotspot: true}},
    {name: 'certification', title: 'Certification', type: 'string'},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'period', title: 'Duration', type: 'string'},
    {
      name: 'skills',
      title: 'Skills Gained',
      type: 'array',
      of: [{name: 'skill', title: 'Skill', type: 'string'}],
    },
    {
      name: 'bgcolor',
      title: 'Bg Color (e.g. bg-[#badbad])',
      type: 'string',
      initialValue: 'bg-[#badbad]',
    },
  ],
}
