export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'number'},
    {name: 'title', title: 'Project Title', type: 'string'},
    {name: 'imageurl', title: 'ImgURL', type: 'image', options: {hotspot: true}},
    {name: 'link', title: 'Live Link', type: 'string'},
    {name: 'githubLink', title: 'Code Link', type: 'string'},
    {name: 'date', title: 'Date', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {
      name: 'skills',
      title: 'Skills Used in Project',
      type: 'array',
      of: [{name: 'skill', title: 'Skill', type: 'string'}],
    },
    {
      name: 'skillIcons',
      title: 'Icon of Skills Used in Project',
      type: 'array',
      of: [{name: 'skillIcon', title: 'Skill Icon', type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'photoGallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{name: 'photo', title: 'Sample Picture', type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'bgcolor',
      title: 'Bg Color (e.g. bg-[#badbad])',
      type: 'string',
      initialValue: 'bg-[#badbad]',
    },
  ],
}
