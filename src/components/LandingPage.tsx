import React from 'react'

type Props = {}

export const LandingPage:React.FC = (props: Props) => {
    return (
        <div className='mx-auto pb-5 results-container mt-5'>
            <div className='text-center'>
                <h1 className='display-1'>Welcome to <span className='artist-name' style={{fontSize: '5rem'}}>Album Art</span></h1>
            </div>
            <div className='landing-body mt-5'>
                <p> This site was created to showcase the beauty and poetry an album portrays before it even starts to play. The popular saying is "don't judge a book by it's cover", but I dare to challenge that statement. The cover is what you see first and what provokes the first emotions you experience from a project. Musicians and Artists alike put thought, heart, passion, and time into these covers, because they understand the severity of that initial judgement, those first emotions.</p>
                <p className='mt-5'>Use the search bar above to search for a musician, then enjoy a gallery of their album artwork available on Spotify. Thank you for your time.</p>
            </div>
        </div>
    )
}