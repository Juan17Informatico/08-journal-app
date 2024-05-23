import { IconButton } from "@mui/material";
import { AddOutlined, Note } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";
import { NoteView } from "../views/";
import { savingNewNote, startNewNote } from "../../store/journal";
import { useDispatch, useSelector } from "react-redux";

export const JournalPage = () => {

    const {isSaving, active} = useSelector((state) => state.journal);
    const dispatch = useDispatch();


    const onClickNewNote = () => {
        dispatch( startNewNote() );
        dispatch( savingNewNote() ); 
    }

    return (
        <JournalLayout>
            {
                (!!active) 
                ? (<NoteView />)
                : (<NothingSelectedView />)
            }

            <IconButton 
                onClick={onClickNewNote}
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {backgroundColor: 'error.main', opacity: 0.8 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
                disabled={isSaving}
            >
                <AddOutlined  sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    );
};
