// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentObject, starAppointment} = props
  const {id, title, date, isStared} = appointmentObject

  const imgUrl = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarIcon = () => {
    starAppointment(id)
  }

  return (
    <li className="appointmentItem" key={id}>
      <div className="firstContainer">
        <p className="title">{title}</p>
        <button
          type="button"
          data-testid="star"
          onClick={onClickStarIcon}
          className="star-button"
        >
          <img src={imgUrl} alt="star" className="star" />
        </button>
      </div>
      <div className="secondContainer">
        <p className="date">Date: {date}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
