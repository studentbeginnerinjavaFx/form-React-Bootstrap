import './App.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <Form className="Login-form">
    <h1 id="header">MyChekpoint</h1>
    <FormGroup>
      <Label>Email</Label>
      <Input type="email" palceholder="Email"/>
    </FormGroup>
   <FormGroup>
      <Label>Password</Label>
      <Input type="password" palceholder="Password"/>
    </FormGroup>
    <Button className='btn-lg btn-dark btn-block'>Log In</Button>
    
    <div className='text-center mt-3 mb-3'>
    <a href='/Sign-up'>Sign Up</a>
    <span className='p-2'>|</span>
    <a href='/forget-password'>Forget password</a>
    </div>
    
  </Form>
  );
}

export default App;
