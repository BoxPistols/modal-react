import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'Hello Item A',
        image: 'https://picsum.photos/g/600/400?image=1000',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
      {
        name: 'Hello Item B',
        image: 'https://picsum.photos/g/600/400?image=1002',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
      {
        name: 'Hello Item C',
        image: 'https://picsum.photos/g/600/400?image=1003',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
      {
        name: 'Hello Item D',
        image: 'https://picsum.photos/g/600/400?image=1004',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
      {
        name: 'Hello Item E',
        image: 'https://picsum.photos/g/600/400?image=1005',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
      {
        name: 'Hello Item F',
        image: 'https://picsum.photos/g/600/400?image=1006',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
      {
        name: 'Hello Item G',
        image: 'https://picsum.photos/g/600/400?image=1008',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
      {
        name: 'Hello Item H',
        image: 'https://picsum.photos/g/600/400?image=1009',
        introduction: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, React</h1>
            <h2>lorem ipsum dolor sit amet</h2>
          </div>
          <div className='lesson-container'>
            <h3>Items Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatem dicta rerum illum in voluptas quam modi id ipsam</h3>
            <div className='org_cards'>
              {lessonList.map((lessonItem) => {
                return (
                  <Lesson
                    name={lessonItem.name}
                    image={lessonItem.image}
                    introduction={lessonItem.introduction}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
