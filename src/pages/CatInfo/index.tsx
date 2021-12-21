import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../api';

const CatInfo = () => {
  const params = useParams();
  const { imageId } = useParams();
  const [catData, setCatData] = useState<any>(null);
  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    if (imageId && catData == null) {
      API.getImage({ image_id: imageId }).then((response) => {
        setCatData(response.data);
      });
    }
  });

  return (
    <div>
      CatInfo! :3
      <br />
    </div>
  );
};

export default CatInfo;
