import logo from './logo.svg';
import './gallery.css';
import Image1 from './assets/images/image-1.webp';
import Image2 from './assets/images/image-2.webp';
import Image3 from './assets/images/image-3.webp';
import Image4 from './assets/images/image-4.webp';
import Image5 from './assets/images/image-5.webp';
import Image6 from './assets/images/image-6.webp';
import Image7 from './assets/images/image-7.webp';
import Image8 from './assets/images/image-8.webp';
import Image9 from './assets/images/image-9.webp';
import Image10 from './assets/images/image-10.jpeg';
import Image11 from './assets/images/image-11.jpeg';
import { useState } from 'react';

function App() {

  const [allImages, setAllImages] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11
  ])


  return (
    <div className="bg-slate-200">

      <div className='flex items-center justify-center'>
        <div className='w-100 lg:w-3/4 my-6 p-8 bg-white rounded-lg'>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            {allImages?.map((item, index) => {
              return (
                <>
                  {index === 0 ? (
                    <div className='col-span-2 row-span-2 rounded-lg border gallery_image'>
                      <img class="h-auto max-w-full rounded-lg" src={item} alt="" />
                      <div className='img_hover_overlay'>
                        <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' name='' value={''} />
                      </div>
                    </div>
                  ) : (
                    <div className='border rounded-lg gallery_image'>
                      <img class="h-auto max-w-full rounded-lg" src={item} alt="" />
                      <div className='img_hover_overlay'>
                        <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' name='' value={''} />
                      </div>
                    </div>
                  )}
                </>
              )
            })}

          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
