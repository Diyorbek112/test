import React from 'react'


const List = (props) => {
    const {people} =props;

    // console.log(people);
  return (
    <>
    {people.map((person)=>{

        const { name,age, id, image} = person

       
        // console.log(name, age, id, image);
        return(
            <article className='person' key={id}>
               <img src={image} />
               <div>
                   <h4>{name}</h4>
                   <p>
                       {age} years
                   </p>
               </div>
            </article>
        )
    })}
    </>
  )
}

export default List