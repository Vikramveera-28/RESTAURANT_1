import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const About = ({userLogged}) => {
  const navigate = useNavigate();
  const UserName = userLogged[0]?.userName
  useEffect(() => {
    if (!UserName){
      // navigate('/')
      alert("LogIn First")
    };
  }, [UserName, navigate])
  return (
    <main className="container mt-5" id="aboutPage">
      <h3 className="text-secondary border-bottom border-secondary border-3 pt-3">Contact</h3>
        <div className="row">
            <div className="col-12 col-md-6 box-left">
                <img src="https://media.istockphoto.com/id/502872140/photo/luxury-table-setting.jpg?s=612x612&w=0&k=20&c=7xYvB8895xuDyfhuNCvpr8NgQ3wQgC68Mv1hmZxSnsI=" className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-self-center box-right">
                <p className="lead">TastyC Restaurant offers an exceptional dining experience with a focus on fresh, high-quality ingredients and innovative cuisine. The menu features a diverse range of dishes, from gourmet burgers and savory pasta to delectable desserts.</p>
            </div>
        </div>
    </main>
  )
}
export default About;