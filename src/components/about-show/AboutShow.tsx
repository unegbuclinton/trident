import React from 'react'

const AboutShow = () => {
  return (
    <div
      id='About the show'
      className='py-20 mx-auto max-w-[758px] text-white  px-4'
    >
      <div className='max-w-[608px]'>
        <p className='text-xl text-secondaryColor mb-4 lato'>About the show</p>
        <h2 className='text-3xl text-titleColor mb-[50px]'>
          Discover the Thrills and Challenges Awaiting You
        </h2>
      </div>
      <div className='font-normal lato'>
        <p className='text-lg mb-8 leading-8'>
          Across different demographics, social status and personality
          archetypes, BetrayAll will select 20 people that represent your
          everyday Nigerian; from the unassuming to ambitious, boisterous to
          humble, self-serving to natural born leader, and offer them a choice:
          Band together over the duration of the competition and share the grand
          prize among themselves or go all out for themselves and Betray
          everyone else to win the grand prize.
        </p>
        <p className='text-lg mb-8 leading-8'>
          3 of whom, by virtue of the token they pick, will become secret
          members of a group with the power to eliminate the other 17 remaining
          participants to win. We call these 3 people, Judases. <br /> The rest
          of the group, referred to as the Collective, must identify and
          eliminate these secret Judases if they are to survive all the way to
          the finals and win, hopefully outsmarting the underhanded shenanigans
          of the Judases.
        </p>
        <p className='text-lg mb-8 leading-8'>
          Over 13 episodes, BetrayAll wants to explore and highlight how humans
          are motivated by reward and what lengths we will take to betray self
          and others or uphold our principles.
        </p>
      </div>
    </div>
  )
}

export default AboutShow
