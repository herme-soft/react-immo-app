import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3" className="text-left">
            <h5 className="title">Address</h5>
            <ul className="list-unstyled">
              <li>New York, 94126</li>
              <li>+ 01 234 567 89</li>
              <li>Mon - Fri, 8:00-22:00</li>
              <li>info@gmail.com</li>
              <li>sale@gmail.com</li>
            </ul>
          </MDBCol>
          
          <MDBCol md="3">
            <h5 className="title">Menu</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> HouseTrade.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

