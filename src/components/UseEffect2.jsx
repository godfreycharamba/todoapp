import React , {useState , useEffect} from 'react'

const UseEffect2 = () => {
    const [width , setWidth] = useState(window.innerWidth);
    const [height , setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener('resize' , handleResize);
    },[]);

    useEffect(() => {
        document.title = `Size ${width}px x ${height}px`
    },[width , height]);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

   

  return (
    <div>
        <p>Width : {width}px</p>
        <p>Height : {height}px</p>
    </div>
  )
}

export default UseEffect2