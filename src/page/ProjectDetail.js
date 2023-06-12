const ProjectDetailPage = (data) => {
  console.log(data);
  const currentProject = postList.find((project) => {
    return project.id == data.id;
  });
  if (currentProject) {
    return `
            
Bootdey
 
Snippets
Templates
React native
Bootstrap snippet and html example. bs5 team member details
This html snippet was created to help web designers, web developers, front-end and back-end developer save time. Use it for free in your project and build your app faster, You can also download the HTML, CSS, and JS code.
Tags: team,profile

ads via Carbon
Professional bootstrap social network template
  

HTML code
This is the html code used to create this bootstrap snippet, You can copy and paste the following html code inside a page with bootstrap 5.0.1 included, to get the result that you can see in the preview selection

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ti-icons@0.1.2/css/themify-icons.css">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar6.png" alt="...">
                <div class="card-body p-1-9 p-xl-5">
                    <div class="mb-4">
                        <h3 class="h4 mb-0">Dakota Johnston</h3>
                        <span class="text-primary">CEO &amp; Founder</span>
                    </div>
                    <ul class="list-unstyled mb-4">
                        <li class="mb-3"><a href="#!"><i class="far fa-envelope display-25 me-3 text-secondary"></i>dakota@gmail.com</a></li>
                        <li class="mb-3"><a href="#!"><i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>+012 (345) 6789</a></li>
                        <li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>205 Main Street, USA</a></li>
                    </ul>
                    <ul class="social-icon-style2 ps-0">
                        <li><a href="#!" class="rounded-3"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#!" class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="ps-lg-1-6 ps-xl-5">
                <div class="mb-5 wow fadeIn">
                    <div class="text-start mb-1-6 wow fadeIn">
                        <h2 class="h1 mb-0 text-primary">#About Me</h2>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                <div class="mb-5 wow fadeIn">
                    <div class="text-start mb-1-6 wow fadeIn">
                        <h2 class="mb-0 text-primary">#Education</h2>
                    </div>
                    <div class="row mt-n4">
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Education</h3>
                                    <p class="mb-0">University of defgtion, fecat complete ME of synage</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Career Start</h3>
                                    <p class="mb-0">After complete engineer join HU Signage Ltd as a project manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card text-center border-0 rounded-3">
                                <div class="card-body">
                                    <i class="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
                                    <h3 class="h5 mb-3">Experience</h3>
                                    <p class="mb-0">About 20 years of experience and professional in signage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wow fadeIn">
                    <div class="text-start mb-1-6 wow fadeIn">
                        <h2 class="mb-0 text-primary">#Skills &amp; Experience</h2>
                    </div>
                    <p class="mb-4">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                    <div class="progress-style1">
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-6 fw-bold">Wind Turbines</div>
                                <div class="col-6 text-end">70%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress rounded-3 mb-4">
                            <div class="animated custom-bar progress-bar slideInLeft" style="width:70%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" role="progressbar"></div>
                        </div>
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-6 fw-bold">Solar Panels</div>
                                <div class="col-6 text-end">90%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress rounded-3 mb-4">
                            <div class="animated custom-bar progress-bar bg-secondary slideInLeft" style="width:90%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                        </div>
                        <div class="progress-text">
                            <div class="row">
                                <div class="col-6 fw-bold">Hybrid Energy</div>
                                <div class="col-6 text-end">80%</div>
                            </div>
                        </div>
                        <div class="custom-progress progress rounded-3">
                            <div class="animated custom-bar progress-bar bg-dark slideInLeft" style="width:80%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
CSS code
This is the css code used to create this bootstrap snippet, You can copy and paste the following css code inside a page with bootstrap 5.0.1 included, to get the result that you can see in the preview selection

body{margin-top:20px;}
.icon-box.medium {
    font-size: 20px;
    width: 50px;
    height: 50px;
    line-height: 50px;
}
.icon-box {
    font-size: 30px;
    margin-bottom: 33px;
    display: inline-block;
    color: #ffffff;
    height: 65px;
    width: 65px;
    line-height: 65px;
    background-color: #59b73f;
    text-align: center;
    border-radius: 0.3rem;
}
.social-icon-style2 li a {
    display: inline-block;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    background: #59b73f;
    height: 41px;
    line-height: 41px;
    width: 41px;
}
.rounded-3 {
    border-radius: 0.3rem !important;
}

.social-icon-style2 {
    margin-bottom: 0;
    display: inline-block;
    padding-left: 10px;
    list-style: none;
}

.social-icon-style2 li {
    vertical-align: middle;
    display: inline-block;
    margin-right: 5px;
}

a, a:active, a:focus {
    color: #616161;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: .2s;
    -ms-transition-duration: .2s;
    -moz-transition-duration: .2s;
    -webkit-transition-duration: .2s;
    -o-transition-duration: .2s;
}

.text-secondary, .text-secondary-hover:hover {
    color: #59b73f !important;
}
.display-25 {
    font-size: 1.4rem;
}

.text-primary, .text-primary-hover:hover {
    color: #ff712a !important;
}

p {
    margin: 0 0 20px;
}

.mb-1-6, .my-1-6 {
    margin-bottom: 1.6rem;
}
Similar snippets
Find more similar snippets using the following tags:team,profile

Bootstrap example and template. Cover Profile image with button
Cover Profile Image With Button

Bootstrap example and template. bs4 team with zoom effect
Bs4 Team With Zoom Effect

Bootstrap example and template. Works user profile
Works User Profile

Bootstrap example and template. creative team with right content on hover
Creative Team With Right Content On Hover

Trending now
Bootstrap example and template. bs5 dark footer
Bs5 Dark Footer

Bootstrap example and template. chat app
Chat App

Bootstrap example and template. profile edit data and skills
Profile Edit Data And Skills

Bootstrap example and template. profile with data and skills
Profile With Data And Skills

Bootstrap example and template. bs5 team member details
About this bootstrap example/template
This example/template, bs5 team member details, was published on Sep 12th 2021, 19:42 by Bootdey Admin and it is free.

We hope you will enjoy this awesome snippet and stay tuned for the latest updates, bootdey snippets are already used in thousands of blogs, websites and projects. We believe it will save your precious time and gives trendy look to your next web project.

We always try to offer the best beautiful and responsive source of Bootstrap code examples and components.

This code example currectly have 13.4K views, Using this bootstrap snippet you have the following benefits:

Bootstrap 5.0.1
This code example is based on bootstrap 5.0.1 and the grid system of this framework

Responsive
Based on bootstrap framework makes all the layouts perfectly responsive for all devices

Crossbrowser compatibility
Tested on all major browsers, it works smoothly on all of them

semantic html 5
Built on html / css3 the code quality is really amazing

Simple Integration
This code example can be simply integrated on existing sites and new ones too, all you need to do is copy the code and start working

Home
 Bootstrap Snippets
 profile
 Bootstrap html snippet. bs5 team member details
License Privacy policy About Advertise here 
 
Copyright © 2023. Bootdey created by Deyson
        `;
  }
  return `<h1>K ton tai</h1>`;
};

export default ProjectDetailPage;
