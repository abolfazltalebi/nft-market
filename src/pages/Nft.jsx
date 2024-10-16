import { Nfts } from "../constants/marketplaceItem";
import NftDetail from '../components/NftDetail';
import { useParams } from 'react-router-dom';
export default function Nft() {
  const { id } = useParams(); 
  const nft = Nfts.find(item => item.id === parseInt(id)); 

  if (!nft) {
    return <div>NFT not found</div>; }

  return (
    <>
      {nft ? ( 
        <NftDetail nft={nft} /> 
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
