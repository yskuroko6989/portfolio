import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const[letterClass,setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    },4000);

  },[]);
  return (
    <>
    <div className = 'container about-page'>
      <div className = 'text-zone'>
         <h1>
           <AnimatedLetters
           letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx = {15}/>
         </h1>
         <p>
           私は前の会社で販売管理システムを使って仕事をしてました。そのシステムでの便利さに
           驚きました。自分でシステムを作成してみなさんにより楽ができる生活にしていきたいと思いました。
         </p>
         <p>
           自分の強みとしては行動に移す早さと好奇心が強いことです。どこかにいきたい時もその日に予約
           していくほどです。この業界に入る時もMacを次の休みの日に購入してProgateなどを行いました。
         </p>
         <p>
           これまではJava,JavaScript,React,HTML,CSS,C++,Linux,Git,MySQLなどを用いて自分の作れる
           最大限のものを作っています。これからはTypeScriptやLaravelなどといったフレームワークを用いて
           より一層成長していきたいと思います。

         </p>
         <p>よろしくお願いします。</p>

       </div>


      <div className = "stage-cube-cont">
         <div className= "cubespinner">
           <div className= "face1">
                <FontAwesomeIcon icon = {faAngular} color = "#DD0031" />
           </div>
           <div className= "face2">
                <FontAwesomeIcon icon = {faHtml5} color = "#F06529" />
           </div>
           <div className= "face3">
                <FontAwesomeIcon icon = {faCss3} color = "#28A4D9" />
           </div>
           <div className= "face4">
                <FontAwesomeIcon icon = {faReact} color = "#5ED4F4" />
           </div>
           <div className= "face5">
                <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D" />
           </div>
           <div className= "face6">
                <FontAwesomeIcon icon = {faGitAlt} color = "#EC4D28" />
           </div>
         </div>
      </div>
      </div>
      <Loader type="pacman" />
   </>
  )
}

export default About
