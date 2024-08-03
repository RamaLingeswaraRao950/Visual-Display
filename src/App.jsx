import React from 'react';
import './App.css';

const images = [
  "https://picsum.photos/id/10/200",
  "https://picsum.photos/id/1003/200",
  "https://picsum.photos/id/101/200",
  "https://picsum.photos/id/1011/200",
  "https://picsum.photos/id/1015/200",
  "https://picsum.photos/id/1018/200",
  "https://picsum.photos/id/1025/200",
  "https://picsum.photos/id/1026/200",
  "https://picsum.photos/id/1028/200",
  "https://picsum.photos/id/1029/200",
  "https://picsum.photos/id/1031/200",
  "https://picsum.photos/id/1040/200",
  "https://picsum.photos/id/1050/200",
  "https://picsum.photos/id/1060/200",
  "https://picsum.photos/id/1070/200",
  "https://picsum.photos/id/1080/200",
  "https://picsum.photos/id/1020/200",
  "https://picsum.photos/id/11/200",
  "https://picsum.photos/id/22/200",
  "https://picsum.photos/id/33/200"
];

const App = () => {
  return (
    <div>
      <div className="banner">
        <span className="marquee">Visual Display</span>
      </div>
      <div className="container">
        {images.map((src, index) => (
          <div className="box" key={index}>
            <img src={src} alt={`img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;