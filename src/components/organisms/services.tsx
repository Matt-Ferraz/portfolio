import Title from '../atoms/Title';
import Technologies from '../molecules/technologies';
import HTML5 from "../assets/html5.svg"
import CSS from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import c from "../assets/c.svg"
import git from "../assets/git.svg"
import angular from "../assets/angular.svg"
import vue from "../assets/vue.svg"
import sourcetree from "../assets/sourcetree.svg"
import react from "../assets/react.svg"
import node from "../assets/node.svg"
import express from "../assets/express.svg"
import docker from "../assets/docker.svg"
import mysql from "../assets/mysql.svg"
import { Technology } from '../molecules/technologies';


export default function MySkills() {
  const techs: Technology[] = [
    { id: 1, label: 'HTML', key: 'html', img: HTML5 },
    { id: 2, label: 'CSS', key: 'css', img: CSS },
    { id: 3, label: 'JavaScript', key: 'js', img: javascript },
    { id: 4, label: 'C', key: 'c', img: c },
    { id: 5, label: 'Git', key: 'git', img: git },
    { id: 6, label: 'AngularJS', key: 'angularjs', img: angular },
    { id: 7, label: 'VueJS', key: 'vuejs', img: vue },
    { id: 8, label: 'SourceTree', key: 'sourcetree', img: sourcetree },
    { id: 9, label: 'React', key: 'react', img: react },
    { id: 10, label: 'NodeJS', key: 'nodejs', img: node },
    { id: 11, label: 'Express', key: 'express', img: express },
    { id: 13, label: 'Docker', key: 'docker', img: docker },
    { id: 14, label: 'MySQL', key: 'mysql', img: mysql },
  ];
  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center">
      <Title text="My skills" />
      <Technologies techs={[...techs]} />
    </div>
  )
}