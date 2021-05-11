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


//     const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//         <a
//         href=""
//         ref={ref}
//         onClick={(e) => {
//             e.preventDefault();
//             onClick(e);
//         }}
//         >
//         {children}
//         &#x25bc;
//         </a>
//     ));
  
//     const CustomMenu = React.forwardRef(
//     ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
//       const [value, setValue] = useState('');
  
//       return (
//         <div
//           ref={ref}
//           style={style}
//           className={className}
//           aria-labelledby={labeledBy}
//         >
//           <FormControl
//             autoFocus
//             className="mx-3 my-2 w-auto"
//             placeholder="Type to filter..."
//             onChange={(e) => setValue(e.target.value)}
//             value={value}
//           />
//           <ul className="list-unstyled">
//             {React.Children.toArray(children).filter(
//               (child) =>
//                 !value || child.props.children.toLowerCase().startsWith(value),
//             )}
//           </ul>
//         </div>
//       );
//     });
  
//     return (   
//         <Dropdown>
//             <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//                 Custom toggle
//             </Dropdown.Toggle>

//             <Dropdown.Menu as={CustomMenu}>
//                 <Dropdown.Item className="item" eventKey="1">Red</Dropdown.Item>
//                 <Dropdown.Item className="item" eventKey="2">Blue</Dropdown.Item>
//                 <Dropdown.Item className="item" eventKey="3" active>
//                 Orange
//                 </Dropdown.Item>
//                 <Dropdown.Item className="item" eventKey="1">Red-Orange</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>      
//     )
// }


// const DropDown = () => {
//     const dropdownRef = useRef(null);
//     const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
//     const onClick = () => setIsActive(!isActive);
  
//     return (
//       <div className="container">
//         <div className="menu-container">
//           <button onClick={onClick} className="menu-trigger">
//             <span>User</span>
//             <img
//               src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
//               alt="User avatar"
//             />
//           </button>
//           <nav
//             ref={dropdownRef}
//             className={`menu ${isActive ? "active" : "inactive"}`}
//           >
//             <ul>
//               <li>
//                 <a href="#">Messages</a>
//               </li>
//               <li>
//                 <a href="#">Trips</a>
//               </li>
//               <li>
//                 <a href="#">Saved</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     );
// }

export default DropDown
