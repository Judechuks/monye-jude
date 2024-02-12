export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'number'},
    {name: 'period', title: 'Period', type: 'string'},
    {name: 'position', title: 'Position', type: 'string'},
    {name: 'company', title: 'Company', type: 'string'},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'type', title: 'Employment Type', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
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
