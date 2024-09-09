import React from 'react'
import { Navbar, Footer } from "../components";

const Teams = () => {
    return (
        <div>
            <Navbar />
            {/* <Main /> */}
            <div className="Teams_main">
                <div className='Left'>
                    <p className='Teams_h1'>Medium <br></br>for Teams</p>
                    <p className='Teams_h3'>Explore a library of insights from industry experts</p>
                    <p className='Teams_p'>Unlock actionable advice to level up your team. Written by experts with real-world experience, curated by Medium.</p>
                    <button className='get_in_touch'>Get in Touch</button>
                </div>

                <div className='Right'>
                    <div>
                        <p className='Right_h1'>Product-Led Growth for Subscriptions, Using Examples from Medium, LinkedIn and The Athletic<br></br></p>
                        <br></br>
                        <p className='Right_p'>Everyone’s talking about “product-led growth” in the subscription world right now. Companies are seeing the connection between the way the product is designed and how effective the company is at acquiring, engaging and retaining customers — and even driving referrals.<br></br>

                            To do product-led growth well, product managers need to think like business leaders, as well as thinking like product builders.<br></br>

                            It isn’t easy and not everyone has the right skills. Caitlin Roman, has led product teams at three great subscription-first organizations, LinkedIn, Medium and most recently The Athletic, which was acquired in January of 2022 by the New York Times, for about $550 Million.<br></br>

                            {/* She has developed pattern recognition about what it takes to build great products that actually help grow the business.<br></br> */}

                            In this conversation, Caitlin and I talk about best practices learned at LinkedIn, Medium and The Athletic and the skills needed to drive product-led growth.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Teams;
