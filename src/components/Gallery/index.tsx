import { useEffect, useState } from 'react';
import API from '../../api';

const Gallery = (props: any) => {
  const [images, setImages] = useState<any[]>([]);
  const [fetchingData, setFetchingData] = useState<boolean>(false);

  useEffect(() => {
    setImages([]);

    if (props.selectedBreedId) {
      setFetchingData(true);

      API.getImages({
        breed_id: props.selectedBreedId,
        limit: 8,
        page: 0,
        order: 'asc',
      }).then((res) => {
        setImages(res.data);
        setFetchingData(false);
      });
    }
  }, [props.selectedBreedId]);

  return (
    <div>
      <h3>Gallery</h3>
    </div>
  );
};

export default Gallery;
