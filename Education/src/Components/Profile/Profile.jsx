// import React, { useEffect, useState } from 'react'
// import user from '../../assets/user-1.png'
// import './Profile.css'

// export const Profile = () => {
//     const [image, setImage] = useState(user);
//     const [menuVisible, setMenuVisible] = useState(false);
//     const [modalVisible , setModalVisible] =useState(false);

//     useEffect(()=>{
//         localStorage.setItem('profileImage', image);
//     },[image])

//     const handleImageChange =(event)=>{
//         const file=event.target.files[0];
//         if(file){
//             const imageUrl=URL.createObjectURL(file);
//             setImage(imageUrl);
//             setModalVisible(false);
//             setMenuVisible(false)
//         }
//     };

    
//     const removeImage =()=>{
//         setImage(user)
//         localStorage.removeItem("profileImage")
//         setModalVisible(false)
//         setMenuVisible(false)
//     }

//     return (
//         <>
//             <div className='profile-container'>
//             {/* <div className="image-wrapper">
//                     <img src={image} alt="" className='profile' onClick={() => setMenuVisible(!menuVisible)} />
//                     {menuVisible && (
//                         <div className="menu">
//                             <button onClick={()=>setModalVisible(true)}>Change Profile photo</button>
//                             <h1>yash khatri</h1>
//                         </div>
//                     )}
//                 </div> */}
//                 <div className="image-wrapper">
//                     <img src={image} alt="" className='profile' onClick={()=>setModalVisible(true)}/>
//                         {/* <div className="menu">
//                             <button onClick={()=>setModalVisible(true)}>Change Profile photo</button>
//                             <h1>yash khatri</h1>
//                         </div> */}
//                 </div>
//                 {
//                     modalVisible &&(
//                         <div className="modal">
//                         <div className="modal-content">
//                             <h3>Change Profile Photo</h3>
//                             <label htmlFor="fileInput">Upload Photo</label>
//                             <button onClick={removeImage}>Remove Photo</button>
//                             <button onClick={() => { setModalVisible(false); setMenuVisible(false); }}>Cancel</button>
//                         </div>
//                     </div>
//                     )
//                 }
//                  <input
//                     type="file"
//                     id="fileInput"
//                     style={{ display: "none" }}
//                     onChange={handleImageChange}
//                 />
//             </div>
//         </>
//     )
// }


