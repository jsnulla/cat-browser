import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [images, setImages] = useState<any[]>([]);
  const selectedBreedId = useSelector((state: any) => state.selectedBreedId);

  useEffect(() => {
    console.log('selected breedId', selectedBreedId);
  });

  return (
    <div>
      <h3>Gallery</h3>
    </div>
  );
};

export default Gallery;
