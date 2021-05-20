import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './DropDown.scss'

const DropDown = ({ onSelect }) => {

    // function AlertItem(item) { 
    //     alert(item + "을 선택하셨습니다.");
    // }

    return (
        <DropdownButton id="dropdown-basic-button" title="-- Select Category --">
            <Dropdown.Item onSelect={onSelect} eventKey="인삿말" >인삿말</Dropdown.Item>
            <Dropdown.Item onSelect={onSelect} eventKey="제품소개" >제품소개</Dropdown.Item>
            <Dropdown.Item onSelect={onSelect} eventKey="매장안내" >매장안내</Dropdown.Item>
        </DropdownButton>
        
    )
}

export default DropDown
