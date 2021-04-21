import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  const onClick = () => {
    console.log('Clicked')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
      color={showAdd? 'red':'green'}
      text={showAdd? 'Close':'Add'}
      onClick={onAdd}></Button>
    </header>
  )
}

Header.defaultProps = {
  title : "Antonas Task Tracker"
}

// CSS IN JS if we want dynamic css
/* <h1 style={headingStyle}>Task Tracker {props.title}</h1>

const headingStyle = {
  color:'green',
  backgroundColor: 'yellow'
} */

export default Header
