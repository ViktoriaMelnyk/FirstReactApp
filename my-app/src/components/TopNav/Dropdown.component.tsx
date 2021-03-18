import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`
const Corp = styled.div`

`
const Dropdown = styled.div`

`
const DropdownBtn = styled.button`

`
const DropdownContent = styled.div`

`


export const DropdownComp: FC = () =>{
  return(

    <Wrapper>
       
        <Corp>
        <a href=""><img src="" alt=""/></a>
        <p>Corporate</p> 
        </Corp>
        <Dropdown>
            <DropdownBtn>
                <i></i>
            </DropdownBtn>
        </Dropdown>
        <DropdownContent>
                <input type="text" placeholder= "Filter..."/>
                <p>Platform</p>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Publications</a></li>
                    <li><a href="">People</a></li>
                    <li><a href="">Entities</a></li>
                    <li><a href="">Administration</a></li>
                </ul>
                <p>Workspaces</p>
                <ul>
                    <li><a href="">Client contract</a></li>
                    <li><a href="">Supplier contract</a></li>
                    <li><a href="">Corporate</a></li>
                    <li><a href="">Group Norms</a></li>
                    <li><a href="">Real estate contracts</a></li>
                </ul>
                
        </DropdownContent>

    </Wrapper>
      
//    <nav>
//        <img src="" alt=""/>
//        <div className='home'>
//            <a href=""><img src="" alt=""/></a>
//            <p>Home</p>
//        </div>
//        <div className='corporate'>
//            <a href=""><img src="" alt=""/></a>
//            <p>Corporate</p>
//        </div>
//        <div className="dropdown">
//             <button className="dropbtn">Dropdown
//             <i></i>
//             </button>
//         <div className="dropdown-content">
//             <a href="#"></a>
//             <a href="#"></a>
//             <a href="#"></a>
//         </div>
//         <input type="text" placeholder="Search.."></input>
//         <div>
//             <a href=""><img src="" alt=""/></a>
//             <a href=""><img src="" alt=""/></a>
//             <a href=""><img src="" alt=""/></a>
//         </div>
//    </nav>
  );
};