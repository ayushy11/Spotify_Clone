import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../data/DataLayer';

function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    // console.log("PLAYLISTS->>", playlists);
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            <div className="sidebar_playlists">
            
                {playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))}

            </div>

            {/* <SidebarOption title="Hip hop" />
            <SidebarOption title="Rock" />
            <SidebarOption title="Rnb" /> */}
        </div>
    )
};

export default SideBar;
