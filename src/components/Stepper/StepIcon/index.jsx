// @ts-nocheck
import { styled } from '@mui/material/styles'
import PendingIcon from '@mui/icons-material/PendingActionsOutlined'
import AcceptedIcon from '@mui/icons-material/InsertInvitation'
import WorkingIcon from '@mui/icons-material/EditCalendarOutlined'
import DoneIcon from '@mui/icons-material/DoneAllOutlined'
import PropTypes from 'prop-types'

const LumosStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.info.main : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        background: theme.palette.info.dark,
    }),
    ...(ownerState.completed && {
        background: theme.palette.success.main,
        color: 'black',
    }),
}))

const ICON_SIZE = 25

const iconSx = {
    fontSize: `${ICON_SIZE}px`,
}

export default function LumosStepIcon(props) {
    const { active, completed, className } = props

    const icons = {
        1: <PendingIcon sx={iconSx} />,
        2: <AcceptedIcon sx={iconSx} />,
        3: <WorkingIcon sx={iconSx} />,
        4: <DoneIcon sx={iconSx} />,
    }

    return (
        <LumosStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </LumosStepIconRoot>
    )
}

LumosStepIcon.prototype = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
}
