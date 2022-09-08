import MyImage from './bg.jpg';

export default function About() {
  return (
    <div className='container-fluid' style={
        {
            position:'relative',
        }
      }>
      <img src={MyImage} alt="background-library" width={1250} height={500}  />
        <div style={
        {
            position:'absolute',
           // color:'white'
        }
      } >
        <h1>Hey Folks</h1>
        </div>
         
</div>

  );
}