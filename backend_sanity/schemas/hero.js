export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'number'},
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'imageurl', title: 'ImgURL', type: 'image', options: {hotspot: true}},
    {
      name: 'cv_link',
      title: 'CV Link',
      type: 'string',
      initialValue:
        'https://drive.google.com/file/d/1GlWL4nLnEhH8KxzCQ8nofglTDdYy0Ur5/view?usp=sharing',
    },
    {
      name: 'msg',
      title: 'Intro Message',
      type: 'text',
      initialValue:
        'A frontend web developer with expertise in React.js. I enjoy solving problems and learning new skills. I am always looking for new challenges and opportunities to grow as a developer. Building beautiful web experience is my passion.',
    },
  ],
}
