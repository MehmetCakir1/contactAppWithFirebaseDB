import firebase from "./firebase"
import { getDatabase,onValue,push, ref, remove, set, update  } from "firebase/database";
import {useState,useEffect} from "react"
import Toastify from "./toastify"



// add info
export const addUser=(info)=>{
    const db = getDatabase(firebase);
    const userRef=ref(db,"users/")
    const newUserRef=push(userRef);
    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
}

//get data
export const useGetData=()=>{
    const [isLoading,setIsLoading]=useState()
    const [contactList,setContactList]=useState()
    useEffect(() => {

        const db = getDatabase(firebase);
        const userRef=ref(db,"users/")
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  const userArray=[]

  for(let id in data)
  userArray.push(
    {id, ...data[id]}
  )
  setContactList(userArray)
  setIsLoading(false)
});
    }, [])
    return {isLoading,contactList}
}


//delete

export const deleteUser = (id)=>{
  
  const db = getDatabase(firebase);
  const userRef=ref(db,"users/");
  remove(ref(db,"users/"+id))
  Toastify("Deleted successfully")

}

//edit


export const updateUser=(info)=>{
  const db = getDatabase(firebase);
  const updates={}
  updates["users/"+info.id]=info
  Toastify("Edited successfully")
  return update(ref(db),updates)

}


