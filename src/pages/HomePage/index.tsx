import { useState, useEffect } from "react";
import { User } from "../../api/types";
import api from "../../api/users";
import { Button } from "../../values/ButtonElements";
import { 
    LayoutContentPage, 
    HomePageContainer, 
    HeadingWrapper, 
    SubHeadingWrapper, 
    SortIconWrapper, 
    SortOldNew, 
    SortAlphaIcon,
    SearchText,
    PgWrapper,
    CreateIcon,
} from "./HomePageElements"

import {
    IconButton,
    Tooltip,
    Menu,
    MenuItem,
    TextField,
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import Users from "./Users";
import CreateModal from "../CreateModal/CreateModal";


function HomePage() {
    const [users, setUsers] = useState<User[]>([]);
    const [ogUsers, setOgUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElChron, setAnchorElChron] = useState<null | HTMLElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const usersPerPage = 5;
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

    //Retrieve Users
    const retrieveUsers = async () => {
        const response = await api.get("/users");
        return response.data;
    }

    useEffect(() => {
        setLoading(true);
        const getAllUsers = async () => {
            const allUsers = await retrieveUsers();
            if (allUsers) {
                setUsers(allUsers);
                setOgUsers(allUsers);
                setLoading(false);
            }
        };
        getAllUsers();
    }, []);

    console.log(users);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickChron = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElChron(event.currentTarget);
    };
    
    const handleCloseChron = () => {
        setAnchorElChron(null);
    };

    const sortAtoZ = () => {
        const sorted = users
            .sort((a, b) => a.lastName.localeCompare(b.lastName));
        setUsers(sorted);
        handleClose();
    }

    const sortZtoA = () => {
        const sorted = users
            .sort((a, b) => b.lastName.localeCompare(a.lastName));
        setUsers(sorted);
        handleClose();
    }

    const sortOldestFirst = () => {
        const sorted = users
            .sort((a, b) => b.dob - a.dob);
        setUsers(sorted);
        handleCloseChron();
    }

    const sortNewestFirst = () => {
        const sorted = users
            .sort((a, b) => a.dob - b.dob);
        setUsers(sorted);
        handleCloseChron();
    }

    const isTextMatched = (user: User): boolean => {
        return (
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) 
        || user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        || user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const handleSearchTerm = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };

    const handleSearchEnter = () => {
        const newUsers = users.filter(u => {
            if (searchTerm === "") {
                return u;
            }
            else if (searchTerm !== "" && isTextMatched(u)) {
                return u;
            }
            else { return null; }
        })
        setUsers(newUsers);
    }

    const handleReset = () => {
        setUsers(ogUsers);
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
      };

    //Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    

    return (
        <HomePageContainer>
            <LayoutContentPage>
                <HeadingWrapper>User Management System</HeadingWrapper>
                <br />
                <SubHeadingWrapper>
                <SearchText>
                <TextField
                    id="name-search"
                    variant="outlined"
                    label="Search User"
                    color="secondary"
                    onChange={event => handleSearchTerm(event.target.value)}
                    style={{ width: 430, }}
                />
                <Button onClick={handleSearchEnter}>Search</Button>
                <Button onClick={handleReset} primary>Reset</Button>
                </SearchText>
                <SortIconWrapper>
                    <Tooltip title="Sort Alphabetically">
                        <IconButton onClick={handleClick}><SortAlphaIcon /></IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={sortAtoZ}>A to Z</MenuItem>
                        <MenuItem onClick={sortZtoA}>Z to A</MenuItem>
                    </Menu>
                    <Tooltip title="Sort Chronologically">
                        <IconButton onClick={handleClickChron}><SortOldNew /></IconButton>
                    </Tooltip>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorElChron}
                        keepMounted
                        open={Boolean(anchorElChron)}
                        onClose={handleCloseChron}
                    >
                        <MenuItem onClick={sortNewestFirst}>Old to New</MenuItem>
                        <MenuItem onClick={sortOldestFirst}>New to Old</MenuItem>
                    </Menu>
                    <CreateModal lastId={ogUsers.length}/>
                </SortIconWrapper>
                </SubHeadingWrapper>
                <Users currentUsers={currentUsers} loading={loading} />
                <PgWrapper><Pagination count={Math.ceil(users.length / usersPerPage )} variant="outlined" color="secondary" page={currentPage} onChange={handlePageChange} /></PgWrapper>
            </LayoutContentPage>
        </HomePageContainer>

    )
}

export default HomePage