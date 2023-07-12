import React from 'react';
import './Project.css'

const Project = (props) => {
  return (
    <section className='project' id="project">
    <h1>Projects</h1>
    <hr className='projectHR' />
    <p>Here you will find some of my projects.</p>
    	<div className='gridProject'>
    		<div className='boxProject'>
    			<h3 className='projectTitle'>Restaurant Website</h3>
    			<p className='projectDescription'>It is a Restaurant Website.It just uses Html and Css.</p>
    			<a href="https://effervescent-torte-454e6a.netlify.app/" target="_blank" rel="noreferrer" className='projectLink'>See Project</a>
    		</div>
    		<div className='boxProject'>
    			<h3 className='projectTitle'>Project Name</h3>
    			<p className='projectDescription'>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Expedita provident voluptas et non ad dignissimos repellat, dolores quaerat, reprehenderit molestiae, doloremque sunt illum facilis architecto aut quasi unde enim pariatur.</p>
    			<a href="#" className='projectLink'>See Project</a>
    		</div>
    		<div className='boxProject'>
    			<h3 className='projectTitle'>Project Name</h3>
    			<p className='projectDescription'>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Expedita provident voluptas et non ad dignissimos repellat, dolores quaerat, reprehenderit molestiae, doloremque sunt illum facilis architecto aut quasi unde enim pariatur.</p>
    			<a href="" className='projectLink'>See Project</a>
    		</div>
    		<div className='boxProject'>
    			<h3 className='projectTitle'>Project Name</h3>
    			<p className='projectDescription'>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Expedita provident voluptas et non ad dignissimos repellat, dolores quaerat, reprehenderit molestiae, doloremque sunt illum facilis architecto aut quasi unde enim pariatur.</p>
    			<a href="#" className='projectLink'>See Project</a>
    		</div>
    		<div className='boxProject'>
    			<h3 className='projectTitle'>Project Name</h3>
    			<p className='projectDescription'>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Expedita provident voluptas et non ad dignissimos repellat, dolores quaerat, reprehenderit molestiae, doloremque sunt illum facilis architecto aut quasi unde enim pariatur.</p>
    			<a href="#" className='projectLink'>See Project</a>
    		</div>
    		<div className='boxProject'>
    			<h3 className='projectTitle'>Project Name</h3>
    			<p className='projectDescription'>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Expedita provident voluptas et non ad dignissimos repellat, dolores quaerat, reprehenderit molestiae, doloremque sunt illum facilis architecto aut quasi unde enim pariatur.</p>
    			<a href="#" className='projectLink'>See Project</a>
    		</div>

    	</div>
    </section>
  )
}

export default Project;