import React,{useState} from 'react';//Verificado
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar
} from 'react-icons/fa';//Verificado
import { Projects } from '../Projects';//Verificado
import {useSelectedProjectValue} from '../../context';//Verificado
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const {setSelectedProject} = useSelectedProjectValue();//Verificado
    const [active,setActive] = useState('inbox');//Verificado
    const [showProjects,setShowProjects] = useState(true);//Verificado

    return(
            <div className="sidebar" data-testid="sidebar">
                <ul className="sidebar__generic">
                    <li data-testid="inbox"
                        className={active === 'inbox' ? 'active': undefined}
                        onClick={() =>{ setActive('inbox');
                                        setSelectedProject('INBOX') }}>
                        <span><FaInbox/></span>
                        <span>Inbox</span>
                    </li>
                    <li data-testid="today"
                        className={active === 'today' ? 'active': undefined}
                        onClick={() =>{ setActive('today');
                                        setSelectedProject('TODAY') }}>
                        <span><FaRegCalendar/></span>
                        <span>Today</span>
                    </li>
                    <li data-testid="next_7"
                        className={active === 'next_7' ? 'active': undefined}
                        onClick={() =>{ setActive('next_7');
                                        setSelectedProject('NEXT_7') }}>
                        <span><FaRegCalendarAlt/></span>
                        <span>Next 7 days</span>
                    </li>
                </ul>
                <div className="sidebar__middle"
                     onClick={() => setShowProjects(!showProjects)}>
                    <span><FaChevronDown className={!showProjects ? 'hidden-projects': undefined}/></span>
                    <h2>Projects</h2>
                </div>{/* Verificado */}
                <ul className="sidebar__projects">
                    {showProjects && <Projects/>}  
                </ul>
                {showProjects && <AddProject/>}
            </div>
    );
};