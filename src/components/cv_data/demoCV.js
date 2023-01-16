import { v4 as uuidv4 } from 'uuid';
import demo from '../assets/demo.jpg';

const demoCV = {
  personalInfo: {
    firstName: 'John',
    secondName: 'Doe',
    title: 'Chef',
    city: 'London',
    email: 'john.doe@yahoo.com',
    mobile: '0123456789',
    image: demo,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum id enim vel blandit. Ut dapibus nec risus quis bibendum. Pellentesque vel interdum dui, et imperdiet mi.',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Chef',
      company: 'Some-bakery',
      expCity: 'London',
      expYearFrom: '2010',
      expYearTo: '2015',
    },
    {
      id: uuidv4(),
      position: 'Chef',
      company: 'First-bakery',
      expCity: 'Oxford',
      expYearFrom: '2008',
      expYearTo: '2010',
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: 'University of Oxford',
      eduCity: 'Oxford',
      degree: 'Culinary Arts',
      uniYearFrom: '2005',
      uniYearTo: '2008',
    },
  ],
};

export default demoCV;
