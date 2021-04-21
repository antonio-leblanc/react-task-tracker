import Button from './Button'

const Header = (props) => {

  const onClick = () => {
    console.log('Clicked')
  }

  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color='green' text='Add' onClick={onClick}></Button>
    </header>
  )
}

Header.defaultProps = {
  title : "Task Tracker"
}

// CSS IN JS if we want dynamic css
/* <h1 style={headingStyle}>Task Tracker {props.title}</h1>

const headingStyle = {
  color:'green',
  backgroundColor: 'yellow'
} */

export default Header
