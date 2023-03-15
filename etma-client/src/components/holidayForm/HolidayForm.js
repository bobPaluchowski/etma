import {Form, Button} from 'react-bootstrap';

const HolidayForm = ({handleSubmit, holidayEntry, labelText, defaultValue}) => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>From:</Form.Label>
        <Form.Control ref={holidayEntry} as="textarea" rows={3} defaultValue={defaultValue} />
        <Form.Label>To:</Form.Label>
        <Form.Control ref={holidayEntry} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default HolidayForm