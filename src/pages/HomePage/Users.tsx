import React, { useState, useEffect } from 'react'
import { User } from '../../api/types';

import { 
    CategoryCard, 
    WidgetLgTable,
    WidgetLgTh,
    WidgetLgTr,
    WidgetLgUser,
    WidgetLgAmount,
    DeleteIcon,
    UpdateIcon,
    MessageContainer
} from "./HomePageElements"

import {
    CircularProgress,
    IconButton,
    Tooltip,
} from '@material-ui/core';

function Users(props: any) {
    const [users, setUsers] = useState<User[]>()
    let loading = props.loading;

    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    useEffect(() => {
        setUsers(props.currentUsers);
    }, [props])


    const formatDate = (milliseconds: number) => {
        var d = new Date(milliseconds);
        return d.toDateString() + ', ' + d.toLocaleTimeString();
    }

    const handleUpdateButton = (id: number) => {
        setShowUpdateModal(true);
    }

    const handleDeleteButton = (id: number) => {
        setShowDeleteModal(true);
    }

    return (
        <div>
            {loading ? <MessageContainer><CircularProgress color="secondary" /></MessageContainer> :
                <CategoryCard>
                    <WidgetLgTable>
                        <WidgetLgTr>
                            <WidgetLgTh>First Name</WidgetLgTh>
                            <WidgetLgTh>Last Name</WidgetLgTh>
                            <WidgetLgTh>Email</WidgetLgTh>
                            <WidgetLgTh>Date Of Birth</WidgetLgTh>
                            <WidgetLgTh>Update</WidgetLgTh>
                            <WidgetLgTh>Delete</WidgetLgTh>
                        </WidgetLgTr>
                        {users?.map(( u, idx ) => {
                            return (
                                <WidgetLgTr>
                                    <WidgetLgUser>{u.firstName}</WidgetLgUser>
                                    <WidgetLgUser>{u.lastName}</WidgetLgUser>
                                    <WidgetLgUser>{u.email}</WidgetLgUser>
                                    <WidgetLgUser>{formatDate(u.dob)}</WidgetLgUser>
                                    <WidgetLgAmount>
                                    <Tooltip title="Update">
                                        <IconButton aria-label="update" color='secondary' onClick={() => handleUpdateButton(u.id)}>
                                            <UpdateIcon />
                                        </IconButton>
                                    </Tooltip>
                                    </WidgetLgAmount>
                                    <WidgetLgAmount>
                                    <Tooltip title="Delete">
                                        <IconButton aria-label="delete" color='secondary' onClick={() => handleDeleteButton(u.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    </WidgetLgAmount>
                                </WidgetLgTr>
                            )
                        })

                        }
                    </WidgetLgTable>
                </CategoryCard>
                }
        </div>
    )
}

export default Users
