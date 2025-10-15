// import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  // let usersArr = ['Panku', 'Sonu', 'Hannu']      //array of names

  // const usersObj = [
  //   { username: 'Pankaj', followers: 332, following: 30, pic: "https://images.pexels.com/photos/30454609/pexels-photo-30454609.jpeg" },
  //   { username: 'Ravi', followers: 418, following: 28, pic: "https://images.pexels.com/photos/28690601/pexels-photo-28690601.jpeg" },
  //   { username: 'Anita', followers: 202, following: 25, pic: "https://images.pexels.com/photos/32719179/pexels-photo-32719179.jpeg" },
  // ]

  const usersObj = [
  {
    username: 'Aarav',
    followers: 1020,
    following: 180,
    about: 'UI designer passionate about minimalism and clean interfaces.',
    pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    username: 'Meera',
    followers: 2450,
    following: 300,
    about: 'Content strategist shaping ideas into meaningful stories.',
    pic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  
  {
    username: 'Isha',
    followers: 3120,
    following: 410,
    about: 'Travel blogger exploring cultures through photography.',
    pic: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
  },
  {
    username: 'Raghav',
    followers: 1760,
    following: 220,
    about: 'Tech reviewer sharing insights on gadgets and innovation.',
    pic: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    username: 'Tanya',
    followers: 2850,
    following: 360,
    about: 'Wellness coach advocating for balance and mental clarity.',
    pic: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
  },
  
  {
    username: 'Diya',
    followers: 1980,
    following: 250,
    about: 'Illustrator bringing ideas to life with vibrant colors.',
    pic: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
 
  {
    username: 'Kavya',
    followers: 2260,
    following: 310,
    about: 'Architect designing sustainable and human-centric spaces.',
    pic: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
  },
  {
    username: 'Leena',
    followers: 3020,
    following: 400,
    about: 'Digital artist experimenting with light, motion, and texture.',
    pic: 'https://images.pexels.com/photos/774867/pexels-photo-774867.jpeg'
  },
  {
    username: 'Kabir',
    followers: 1640,
    following: 210,
    about: 'Entrepreneur building next-gen productivity tools.',
    pic: 'https://images.pexels.com/photos/4158299/pexels-photo-4158299.jpeg'
  },
  {
    username: 'Ananya',
    followers: 2810,
    following: 330,
    about: 'Social media strategist helping brands grow organically.',
    pic: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg'
  }
];





  return (
    <>
      <h1 className='bg-slate-400 font-extrabold text-red-700 mb-4'>Pankaj Barna</h1>

      <div className='flex justify-center gap-4 flex-wrap'>
        {/* Printing a card----------- */}
        {/* <Card /> */}

        {/* Creating cards based on an array------------------------- */}

        {/* {usersArr.map((name, index) => (
        <Card key = {index} username={name} / >
      ))} */}


        {/* Creating cards based on objects   */}

        {usersObj.map((user, index) => (
          <Card key={index} username={user.username} followers={user.followers} following={user.following} about={user.about} img={user.pic} />
        ))}


      </div>




    </>
  )
}

export default App
