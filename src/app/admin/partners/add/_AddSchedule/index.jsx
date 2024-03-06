import {
    dayMapping,
    shiftMapping,
    shifts,
    weekdays,
} from '@/constants/schedule.const'
import dynamic from 'next/dynamic'
const Typography = dynamic(() => import('@mui/material/Typography'))
import { useState, useCallback, memo } from 'react'

import MyButton from '@/components/Button'

const ShiftTable = (props) => {
    const { onGetSchedule, error } = props
    const [selectedCells, setSelectedCells] = useState([])
    const [isValid, setIsValid] = useState(true)

    const handleCellClick = useCallback(
        (day, shift) => {
            const dayNumber = dayMapping[day]
            const shiftNumber = shiftMapping[shift]

            // Check if the cell is already selected
            const isSelected = selectedCells.some(
                (cell) =>
                    cell.dayOfWeek === dayNumber &&
                    cell.workShift === shiftNumber
            )

            if (isSelected) {
                // If selected, remove it from the array
                const updatedCells = selectedCells.filter(
                    (cell) =>
                        !(
                            cell.dayOfWeek === dayNumber &&
                            cell.workShift === shiftNumber
                        )
                )
                setSelectedCells(updatedCells)
                onGetSchedule(updatedCells)
            } else {
                // If not selected, add it to the array
                const newCells = [
                    ...selectedCells,
                    { dayOfWeek: dayNumber, workShift: shiftNumber },
                ]
                setSelectedCells(newCells)
                onGetSchedule(newCells)
            }
        },
        [selectedCells.length]
    )

    return (
        <>
            {error ? <Typography color="error">{error}</Typography> : <></>}

            <table
                className={`w-full border rounded-md border-spacing-3 ${
                    error ? 'border-error' : ''
                }`}
            >
                <thead>
                    <tr>
                        <th></th>
                        {weekdays.map((day) => (
                            <th
                                key={day}
                                className="p-2 bg-gray-200 border min-w-32 "
                            >
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift) => (
                        <tr key={shift}>
                            <th className="p-2 border">{shift}</th>
                            {weekdays.map((day) => (
                                <td
                                    key={`${day}-${shift}`}
                                    className={`border p-2 hover:cursor-pointer hover:bg-secondary ${
                                        selectedCells.some(
                                            (cell) =>
                                                cell.dayOfWeek ===
                                                    dayMapping[day] &&
                                                cell.workShift ===
                                                    shiftMapping[shift]
                                        )
                                            ? 'bg-primary'
                                            : ''
                                    }`}
                                    onClick={() => handleCellClick(day, shift)}
                                ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-start my-3 space-x-2 w-14">
                <MyButton
                    variant="outlined"
                    className="!bg-white border border-black border-solid !min-w-[90px] max-w-5"
                    type="reset"
                    handleClick={() => setSelectedCells([])}
                >
                    Reset
                </MyButton>
            </div>
        </>
    )
}

export default memo(ShiftTable)
