import React, { useEffect } from 'react'
import neet from './ph.jpg';

function Physics() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <section className='neet-section'>
      <div className='container'>
        <div className='bg'></div>
        <div className='neet-main-container'>
            <div className='heading'>
                <span>National Eligibility cum Entrance Test</span>
            </div>
            <div className='neet-container-box'>
                <div className='left'>
                    <div className='up'>
                        <img src={neet} alt=''/>
                        <p>Physics is an ever-evolving science, exploring the fundamental laws of the universe. Dive deeper into its captivating concepts and discoveries through this repository of 1800+ scholarly articles, catering to both researchers and students across various topics.</p>
                    </div>
                    <div className='down'>
                        <h2>Exploring the Fundamentals: A Guide to Basic Physics</h2>
                        <p>Physics is an ever-evolving field of science that aspires to describe the universe’s fundamental laws. From the tiny particles that make up matter to the massive forces that govern the cosmos, physics covers many topics and concepts that continue to captivate us. If you are a physics enthusiast or student looking to dive deeper into physics, plenty of resources are available here. These physics blog posts contain information on various physics concepts, theories, discoveries and cutting-edge experiments. This physics repository contains over 1800+ scholarly articles in physics. It is an excellent resource for researchers and students, with articles covering various topics, from particle physics to astrophysics. By exploring these resources, you can better understand the fundamental laws that govern the universe.</p>
                        <p>01) Physics Laws</p>
                        <p>02) Physics Formulas</p>
                        <p>03) Physics Constants</p>
                        <p>04) Values of Physics Constants</p>
                        <p>05) Relation Between Physics Concepts</p>
                        <p>06) Difference Between Physics Concepts</p>
                        <p>07) Classification of Physics Concepts</p>
                        <p>08) Applications of Physics Concepts</p>
                        <p>09) Derivation of Physics Formulas</p>
                        <p>09) Physics SI Units</p>
                        <p>09) Physics Scientists</p>
                        <p>09) Physics Puzzles</p>
                    </div>
                </div>
                <div className='right'>
                   <div className='main'>
                   <h2>Get in Touch</h2>
                    <form>
                        <div className='same-field'>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='same-field'>
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className='same-field'>
                            <input type="text" placeholder='Phone' />
                        </div>
                        <div className='same-field'>
                            <input type="text" placeholder='Number' />
                        </div>
                        <div className='textarea'>
                            <textarea placeholder='Message..'></textarea>
                        </div>
                        <button type='submit' className='button-86'>Submit</button>
                    </form>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Physics
