import Button from './Button'

const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color='green' text='Add'></Button>
    </header>
  )
}

Header.defaultProps = {
  title : "TaskTracker"
}

// CSS IN JS if we want dynamic css
{/* <h1 style={headingStyle}>Task Tracker {props.title}</h1>

const headingStyle = {
  color:'green',
  backgroundColor: 'yellow'
} */}

export default Header
