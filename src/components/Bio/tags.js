import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase';
import './tags.css';

const Tags = () => {

    const [todosDocs, setTodosDocs] = useState([]); 
    useEffect(() => {

        getDocs(collection(db, "Curriculo")).then((querysnapshot) => {
            setTodosDocs([]);

            querysnapshot.docs.forEach((doc) => {
                
                const data = {id: doc.id, ...doc.data()};
                setTodosDocs((prev) => {
                    return [...prev, data]; 
                })
            })
        })

    },[]);
    
    return(
        <>
            {todosDocs.map((doc)=>{
                return(
                    <>
                    <h3>Competências Gerais em Programação e TI</h3>
                    {doc.Tags.map((tag)=> {
                        return(
                            <>  
                                <div className='tag'>{tag}</div>
                            </>
                        )
                    })}
                    <br /><br /><h3>Competências específicas em React</h3>
                    {doc.ReactTags.map((reacttag)=> {
                        return(
                            <>  
                                <div className='tag'>{reacttag}</div>
                            </>
                        )
                    })}
                        
                    </>
                )
                
            })}
        </>
    )
} 
export default Tags