import { v4 as uuidv4 } from 'uuid';
import empty from '../assets/empty.jpg';

const emptyCV = {
  personalInfo: {
    firstName: '',
    secondName: '',
    title: '',
    city: '',
    email: '',
    mobile: '',
    image: empty,
    description: '',
  },
  experience: [
    {
      id: uuidv4(),
      position: '',
      company: '',
      expCity: '',
      expYearFrom: '',
      expYearTo: '',
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: '',
      eduCity: '',
      degree: '',
      uniYearFrom: '',
      uniYearTo: '',
    },
  ],
};

export default emptyCV;
