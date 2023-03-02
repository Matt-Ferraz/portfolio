import Title from '../atoms/Title';
import Technologies from '../molecules/technologies';
// import HTML5 from "../assets/html5.svg"

interface Technology {
  id: number;
  label: string;
  key: string;
  img?: string;
}


export default function MySkills() {
  const techs: Technology[] = [
    { id: 1, label: 'HTML', key: 'html', img: HTML5 },
    { id: 2, label: 'CSS', key: 'css', img: '' },
    { id: 3, label: 'JavaScript', key: 'js', img: '' },
    { id: 4, label: 'C', key: 'c', img: '' },
    { id: 5, label: 'Git', key: 'git', img: '' },
    { id: 6, label: 'AngularJS', key: 'angularjs', img: '' },
    { id: 7, label: 'VueJS', key: 'vuejs', img: '' },
    { id: 8, label: 'SourceTree', key: 'sourcetree', img: '' },
    { id: 9, label: 'React', key: 'react', img: '' },
    { id: 10, label: 'Node.js', key: 'nodejs', img: '' },
    { id: 11, label: 'Express', key: 'express', img: '' },
    { id: 12, label: 'Git', key: 'git2', img: '' },
    { id: 13, label: 'Docker', key: 'docker', img: '' },
    { id: 14, label: 'MySQL', key: 'mysql', img: '' },
  ];
  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center">
      <Title text="My skills" />
      <Technologies techs={[...techs]} />
    </div>
  )
}