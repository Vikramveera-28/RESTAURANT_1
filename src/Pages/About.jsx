import React from 'react'

const About = () => {
  return (
    <main class="container" id="aboutPage">
      <h3 className="text-secondary border-bottom border-secondary border-3 pt-3">Contact</h3>
        <div class="row">
            <div class="col-12 col-md-6 box-left">
                <img src="https://media.istockphoto.com/id/502872140/photo/luxury-table-setting.jpg?s=612x612&w=0&k=20&c=7xYvB8895xuDyfhuNCvpr8NgQ3wQgC68Mv1hmZxSnsI=" class="img-fluid" alt="" />
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-center align-self-center box-right">
                <p class="lead">TastyC Restaurant offers an exceptional dining experience with a focus on fresh, high-quality ingredients and innovative cuisine. The menu features a diverse range of dishes, from gourmet burgers and savory pasta to delectable desserts.</p>
            </div>
        </div>
    </main>
  )
}
export default About;