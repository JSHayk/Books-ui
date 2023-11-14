import loading_gif from '../../assets/loading.gif';
import './Loading.scss';
const Loading = () => {
  return (
    <div className='loading'>
    <img src={loading_gif} alt="" />
    </div>
  )
}

export default Loading
