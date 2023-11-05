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
    { id: 0, src: Image1 },
    { id: 1, src: Image2 },
    { id: 2, src: Image3 },
    { id: 3, src: Image4 },
    { id: 4, src: Image5 },
    { id: 5, src: Image6 },
    { id: 6, src: Image7 },
    { id: 7, src: Image8 },
    { id: 8, src: Image9 },
    { id: 9, src: Image10 },
    { id: 10, src: Image11 }
  ]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item, index) => {
    setDraggedItem({ item: item, index: index });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem, targetIndex) => {
    e.preventDefault();
    // Make a copy of the original array
    const reorderedItems = [...allImages];
    console.log("target index: " + targetIndex + " dragged index: " + draggedItem.index);
    // Check if the index to replace is within the valid range
    if (targetIndex >= 0 && targetIndex < reorderedItems.length) {
      // const reorderedItems = [...items];
      const [reorderedItem] = reorderedItems.splice(draggedItem.index, 1);
      reorderedItems.splice(targetIndex, 0, reorderedItem);

      setAllImages(reorderedItems);
      setDraggedItem(null);
    }
  };

  const handleImageSelect = (e) => {
    let tempArray = [...selectedImages];
    if (e.target.checked === true) {
      tempArray.push(Number(e.target.value))
    } else {
      tempArray.splice(tempArray.indexOf(e.target.value), 1);
    }
    setSelectedImages(tempArray);
  }

  const removeSelectedImages = () =>{
      const filteredData = allImages.filter(item => !selectedImages.includes(item.id));
      setAllImages(filteredData);
      setSelectedImages([]);
  }
  // console.log(selectedImages);
  return (
    <div className="bg-slate-200">

      <div className='flex items-center justify-center'>
        <div className='w-100 lg:w-3/4 my-6 bg-white rounded-lg'>
          <div className='border-b-2 px-8 py-4'>
            {selectedImages && selectedImages.length > 0 ?
              (<div className='text-bold flex justify-between h-7'>
                <span className=''>{selectedImages.length} Files Selected</span>
                <button onClick={removeSelectedImages} className='text-red-400 hover:underline'>Delete files</button>
              </div>) : (
                <p className='text-xl font-medium h-7'>Gallery</p>
              )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-8">
            {allImages?.map((item, index) => {
              return (
                index === 0 ? (
                  <div key={index} className='col-span-2 row-span-2 rounded-lg border gallery_image' onDragStart={(e) => handleDragStart(e, item, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, item, index)}
                    draggable>
                    <img className="h-auto max-w-full rounded-lg" src={item.src} alt="" />
                    <div className='img_hover_overlay'>
                      <div className='opacity-25 w-full h-full bg-black rounded-lg'>
                      </div>
                      <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 absolute top-0 m-4'
                        name='selected_images[]'
                        value={item.id}
                        onChange={(e) => { handleImageSelect(e) }}
                      />
                    </div>
                  </div>
                ) : (
                  <div key={index} className='transition-all border rounded-lg gallery_image' onDragStart={(e) => handleDragStart(e, item, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, item, index)}
                    draggable>
                    <img className="h-auto max-w-full rounded-lg" src={item.src} alt="" />
                    <div className='img_hover_overlay'>
                      <div className='opacity-25 w-full h-full bg-black rounded-lg'>
                      </div>
                      <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 absolute top-0 m-4'
                        name='selected_images[]'
                        value={item.id}
                        onChange={(e) => { handleImageSelect(e) }}
                      />
                    </div>
                  </div>
                )
              )
            })}
            <div className='border-2 border-dashed rounded-lg gallery_image flex items-center justify-center'>
              <div className='content-center'>
                <center>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p className=''>Add Images</p>
                </center>
              </div>
              <div className='img_hover_overlay'>
                {/* <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' name='' value={''} /> */}
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
