import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
  import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

  import { FaGithubSquare } from "react-icons/fa";
  import { FaLink } from "react-icons/fa";



function ProjectCard() {
    const [centredModal, setCentredModal] = useState(false);

    const toggleOpen = () => setCentredModal(!centredModal);
  return (
    <div>

<MDBCard onClick={toggleOpen}>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center'>Project title</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>

 

<MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)}>
  <MDBModalDialog centered>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Project title</MDBModalTitle>
        <MDBBtn className='btn-close' color='danger' onClick={toggleOpen}></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        <div className='row'>
           <div className="col-6">
           <img src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764523_1280.jpg" alt="" style={{height:370, width:220}}/>
           </div>

           <div className="col-6">
        <h3>Description</h3>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <h3>Technologies</h3>
        <p>React, Node</p>
        <h3>View On</h3>
           </div>

        
</div>

      </MDBModalBody>
      
      <MDBModalFooter>
        <MDBBtn color='secondary'>
        <FaGithubSquare  className='fs-3 m-2'/>
        </MDBBtn>
        <MDBBtn><FaLink className='fs-2'/>
        </MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>


    </div>
  )
}

export default ProjectCard