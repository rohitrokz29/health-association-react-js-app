import React from 'react'
import Card from './cards/Card';
const News = (props) => {
  return (
    <div>
  <div className="hero " style={{ flexWrap: 'wrap' }}>
                <div className="hero-body is-transperent is-flex is-justify-content-center  is-flex-wrap-wrap card-box	 ">
                    <Card key="appointment" query=' Book Doctor Appointment' icon has-text-grey-lighter is-hoverable='' image='https://img.freepik.com/premium-vector/personal-doctor-appointment-2d-vector-isolated-illustration-visit-professional-health-facility-flat-characters-cartoon-background-getting-treatment-plan-symptoms-conditions-colourful-scene_151150-5797.jpg?w=740' url="/book-an-appointment" />
                    <Card key='doctor' query='Get your Doctor ' icon has-text-grey-lighter is-hoverable='' image='https://www.shutterstock.com/image-vector/doctor-stethoscope-on-laptop-screen-260nw-1892457136.jpg' url="get-doctor" />
                    <Card key='health' query='Health Checkup' icon has-text-grey-lighter is-hoverable='' image='https://img.freepik.com/premium-vector/man-see-doctor-check-himself_134553-253.jpg?w=740' url='health-checkup'/>
                    <Card key='report' query=' Medical Reports ' icon has-text-grey-lighter is-hoverable='' image='https://media.istockphoto.com/id/497452643/vector/doctor-showing-a-medical-report.jpg?s=612x612&w=is&k=20&c=ZnB3evSrHk7tCM_BEBNNoxXTGkny1LS-MjpzbdlUWKA=' url='medical-reports' />

                </div>
            </div>
    </div>
  )
}

export default News;
