import { useState, useRef, useEffect, RefObject } from 'react';
import Navigation from './components/Navigation';

const example = [
  {
    id: 11,
    name: 'Kevin',
    age: 37,
    email: 'kevin@example.com',
    isActive: true,
    company: {
      name: 'Tech Corp',
      location: {
        city: 'San Diego',
        zip: '92101',
        building: {
          name: 'Innovation Tower',
          floor: 5,
          office: {
            roomNumber: 504,
            capacity: 10,
          },
        },
      },
    },
    hobbies: ['chess', 'coding'],
  },
  {
    id: 12,
    name: 'Sophia',
    age: 29,
    email: 'sophia@example.com',
    isActive: false,
    company: {
      name: 'Health Solutions',
      location: {
        city: 'Chicago',
        zip: '60601',
        building: {
          name: 'Wellness Center',
          floor: 3,
          office: {
            roomNumber: 305,
            capacity: 6,
          },
        },
      },
    },
    hobbies: ['yoga', 'painting'],
  },
  {
    id: 13,
    name: 'Daniel',
    age: 41,
    email: 'daniel@example.com',
    isActive: true,
    company: {
      name: 'Finance Experts',
      location: {
        city: 'New York',
        zip: '10001',
        building: {
          name: 'Wall Street Tower',
          floor: 10,
          office: {
            roomNumber: 1012,
            capacity: 15,
          },
        },
      },
    },
    hobbies: ['golf', 'investing'],
  },
  {
    id: 14,
    name: 'Emily',
    age: 35,
    email: 'emily@example.com',
    isActive: false,
    company: {
      name: 'Design Studios',
      location: {
        city: 'Los Angeles',
        zip: '90001',
        building: {
          name: 'Creative Hub',
          floor: 7,
          office: {
            roomNumber: 703,
            capacity: 8,
          },
        },
      },
    },
    hobbies: ['photography', 'sketching'],
  },
  {
    id: 15,
    name: 'Michael',
    age: 45,
    email: 'michael@example.com',
    isActive: true,
    company: {
      name: 'Automotive Innovations',
      location: {
        city: 'Detroit',
        zip: '48201',
        building: {
          name: 'Motor Lab',
          floor: 2,
          office: {
            roomNumber: 208,
            capacity: 12,
          },
        },
      },
    },
    hobbies: ['car restoration', 'racing'],
  },
];

const JsonPage = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleOutputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOutputValue(e.target.value);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      <div>
        <nav>
          <Navigation />
        </nav>
        <main className='flex h-[calc(100vh-96px)] pt-8 c-scroll  text-ourLnWhite'>
          <div className='w-12'></div>
          <div className='flex gap-2 text-sm'>
            {/* Input */}
            <article className='p-4 mb-20 h-fill w-96 '>
              <div className='flex justify-between mb-1'>
                <div className='text-white'>Input</div>
                <div>
                  <button>복사</button>
                  <button>초기화</button>
                  <button></button>
                </div>
              </div>
              <textarea
                ref={inputRef}
                className='w-full p-2 resize-none bg-ourBgLightGray h-96 c-scroll-sm c-scroll focus:outline-ourLnGray'
                value={inputValue}
                onChange={handleInputChange}
              />
            </article>

            {/* Output */}
            <article className='p-4 mb-20 h-fill w-96'>
              <div className='flex justify-between mb-1'>
                <div className='text-white'>Output</div>
                <div>
                  <button>복사</button>
                  <button>초기화</button>
                  <button>기타버튼</button>
                </div>
              </div>
              <textarea
                className='w-full p-2 resize-none bg-ourBgLightGray h-96 c-scroll-sm c-scroll focus:outline-ourLnGray'
                value={outputValue}
                onChange={handleOutputChange}
              />
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default JsonPage;
